import {Module, RequestMethod} from '@nestjs/common';
import {UsersModule} from '../users/users.module';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';
import {LoggerMiddleware} from '../common/middlewares/logger.middleware';
import * as passport from 'passport';
import {JwtStrategy} from '../auth/jwt.strategy';
import {AuthService} from '../auth/auth.service';

@Module({
    components: [AuthService, JwtStrategy],
    modules: [UsersModule],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(
                {path: '/**', method: RequestMethod.ALL},
            )
            .apply(passport.authenticate('jwt', {session: false}))
            .forRoutes(
                {
                    path: '/**', method: RequestMethod.ALL,
                },
            );
    }
}