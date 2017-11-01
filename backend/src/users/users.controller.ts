import { Body, Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserMembershipService } from './user-membership.service';

@Controller('v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService, private readonly userMembershipService: UserMembershipService) {

    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id: string) {
        return this.usersService.getById(id);
    }

    @Get('/:id/membership')
    findMembershipByUser(@Param('id') id: string) {
        return this.userMembershipService.findByUser(id);
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() user: any) {
        return this.usersService.updateUser(id, user);
    }

    @Post('/:id/image')
    updateProfileImage(@Param('id') id: string, @Body() body: any, @Req() req) {
        return this.usersService.updateUserProfileImage(id, req.files[0].location);
    }
}