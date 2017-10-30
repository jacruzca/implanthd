import { Controller, Get, Param } from '@nestjs/common';
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
}