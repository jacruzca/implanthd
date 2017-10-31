import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {

    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id: string) {
        return this.usersService.getById(id);
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() user: any) {
        return this.usersService.updateUser(id, user);
    }
}