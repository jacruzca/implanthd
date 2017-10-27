import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { UserTokenService } from './user-token.service';
import { userTokenProviders } from './user-token.providers';

@Module({
    modules: [DatabaseModule],
    controllers: [UsersController],
    components: [
        UsersService,
        ...usersProviders,
        UserTokenService,
        ...userTokenProviders,
    ],
    exports: [UsersService, UserTokenService],
})
export class UsersModule {
}