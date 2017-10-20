import * as jwt from 'jsonwebtoken';
import {Component} from '@nestjs/common';
import {Constants} from '../common/constants';

@Component()
export class AuthService {
    async createToken() {
        const expiresIn = 60 * 60;
        const user = {email: 'test@gmail.com'};
        const token = jwt.sign(user, Constants.secretKey, {expiresIn});
        return {
            expires_in: expiresIn,
            access_token: token,
        };
    }

    async validateUser(signedUser): Promise<boolean> {
        return false;
    }
}