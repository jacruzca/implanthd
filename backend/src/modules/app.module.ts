import {Module, RequestMethod} from '@nestjs/common';
import {UsersModule} from '../users/users.module';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';
import {LoggerMiddleware} from '../common/middlewares/logger.middleware';

@Module({
    modules: [UsersModule],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            {path: '/**', method: RequestMethod.ALL},
        );
    }
}