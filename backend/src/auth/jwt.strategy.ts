import * as passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {AuthService} from './auth.service';
import {Component, Inject} from '@nestjs/common';
import {async} from 'rxjs/scheduler/async';
import {Constants} from '../common/constants';

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
        console.debug(req);
        const isValid = await this.authService.validateUser(payload);
        if (!isValid) {
            console.debug(isValid);
            return done('Unauthorized', false);
        }
        done(null, payload);
    }

}