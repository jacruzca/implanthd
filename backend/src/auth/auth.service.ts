import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import { Constants } from '../common/constants';
import { AuthSignInDto } from './auth.signin.dto';
import { UsersService } from '../users/users.service';
import { NotFoundException } from '../common/exceptions/notfound.exception';
import { AuthSignUpDto } from './auth.signup.dto';
import { AuthSignedDto, Token } from './auth.signed.dto';

@Component()
export class AuthService {

    constructor(private readonly usersService: UsersService) {
    }

    async signIn(credentials: AuthSignInDto): Promise<AuthSignedDto> {
        const expiresIn = credentials.rememberPassword ? 60 * 60 * 24 * 265 : 60 * 60 * 2;

        const userModel = await this.usersService.getByEmail(credentials.email);
        const user = userModel.toObject();
        if (!user) {
            throw new NotFoundException(`User not found ${credentials.email}`);
        }

        const token = await jwt.sign(user, Constants.secretKey, {expiresIn});
        return {
            user,
            token: {
                expiresIn,
                accessToken: token,
            },
        };
    }

    async signUp(signUpDto: AuthSignUpDto): Promise<AuthSignedDto> {
        const expiresIn = 60 * 60 * 2; // 2 days
        const userModel = await this.usersService.createSimpleUser(signUpDto);
        const user = userModel.toObject();

        const token = await jwt.sign(user, Constants.secretKey, {expiresIn});
        return {
            user,
            token: {
                expiresIn,
                accessToken: token,
            },
        };
    }

    async validateUser(signedUser): Promise<boolean> {
        return false;
    }
}