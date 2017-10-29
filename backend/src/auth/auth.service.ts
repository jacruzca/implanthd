import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Component } from '@nestjs/common';
import { Constants } from '../common/constants';
import { AuthSignInDto } from './auth.signin.dto';
import { UsersService } from '../users/users.service';
import { NotFoundException } from '../common/exceptions/notfound.exception';
import { AuthSignUpDto } from './auth.signup.dto';
import { AuthSignedDto } from './auth.signed.dto';
import { UserTokenService } from '../users/user-token.service';

@Component()
export class AuthService {

    constructor(private readonly usersService: UsersService, private readonly userTokenService: UserTokenService) {
    }

    async signIn(credentials: AuthSignInDto): Promise<AuthSignedDto> {
        const expiresIn = credentials.rememberPassword ? 60 * 60 * 24 * 265 : 60 * 60 * 24 * 2;

        const userModel = await this.usersService.getByEmail(credentials.email);
        if (!userModel) {
            throw new NotFoundException(`User not found ${credentials.email}`);
        }

        const passwordMatch = await bcrypt.compare(credentials.password, userModel.password);
        if (!passwordMatch) {
            throw new NotFoundException(`Invalid password for ${credentials.email}`);
        }

        const user = userModel.toObject();

        const token: string = await jwt.sign(user, Constants.secretKey, {expiresIn});

        await this.userTokenService.createToken({user: userModel, token});

        return {
            user: {
                _id: userModel._id,
                email: userModel.email,
            },
            token: {
                expiresIn,
                accessToken: token,
            },
        };
    }

    async signUp(signUpDto: AuthSignUpDto): Promise<AuthSignedDto> {
        const expiresIn = 60 * 60 * 24 * 2; // 2 days
        const encryptedPassword = await bcrypt.hash(signUpDto.password, 10);
        const userWithEncryptedPassword: AuthSignUpDto = {...signUpDto, ...{password: encryptedPassword}};
        const userModel = await this.usersService.createSimpleUser(userWithEncryptedPassword);
        const user = userModel.toObject();

        const token = await jwt.sign(user, Constants.secretKey, {expiresIn});

        await this.userTokenService.createToken({user: userModel, token});

        return {
            user: {
                _id: userModel._id,
                email: userModel.email,
            },
            token: {
                expiresIn,
                accessToken: token,
            },
        };
    }

    async validateUser(payload: any): Promise<boolean> {
        const user = await this.usersService.getByEmail(payload.email);
        return user && user !== null;
    }
}