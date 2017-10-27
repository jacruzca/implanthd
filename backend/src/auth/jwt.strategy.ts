import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Component, Inject } from '@nestjs/common';
import { Constants } from '../common/constants';

@Component()
export class JwtStrategy extends Strategy {

    constructor(private readonly authService: AuthService) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: true,
                secretOrKey: Constants.secretKey,
            },
            async (req, payload, next) => await this.verify(req, payload, next),
        );
        passport.use(this);
    }

    public async verify(req, payload, done) {
        const isValid = await this.authService.validateUser(payload);
        if (!isValid) {
            console.log(`*** INVALID authentication for user: ${payload.email}`);
            return done(null, false);
        }

        console.log(`Valid authentication for user: ${payload.email}`);

        done(null, payload);
    }

}