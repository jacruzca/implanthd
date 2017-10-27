import { Module, RequestMethod } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { LoggerMiddleware } from '../common/middlewares/logger.middleware';
import { AuthModule } from '../auth/auth.module';

@Module({
    modules: [UsersModule, AuthModule],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(
                {path: '/**', method: RequestMethod.ALL},
            );
    }
}