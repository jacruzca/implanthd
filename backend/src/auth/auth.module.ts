import { Module, RequestMethod } from '@nestjs/common';
import * as passport from 'passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { JwtStrategy } from './jwt.strategy';

@Module({
    modules: [UsersModule],
    components: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(passport.authenticate('jwt', {session: false}))
            .forRoutes(
                {
                    path: '/v1/**', method: RequestMethod.ALL,
                },
            );
    }
}