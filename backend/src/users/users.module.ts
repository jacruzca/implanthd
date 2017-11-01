import { Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { UserTokenService } from './user-token.service';
import { userTokenProviders } from './user-token.providers';
import { UserMembershipService } from './user-membership.service';
import { userMembershipProviders } from './user-membership.providers';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { MulterMiddleware } from '../common/middlewares/multer.middleware';

@Module({
    modules: [DatabaseModule],
    controllers: [UsersController],
    components: [
        UsersService,
        ...usersProviders,
        UserTokenService,
        ...userTokenProviders,
        UserMembershipService,
        ...userMembershipProviders,
    ],
    exports: [UsersService, UserTokenService, UserMembershipService],
})
export class UsersModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(MulterMiddleware)
            .forRoutes(
                {path: '/v1/users/:id/image', method: RequestMethod.ALL},
            );
    }
}