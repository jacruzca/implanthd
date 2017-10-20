import {Controller, Get, Post, Body} from '@nestjs/common';
import {CreateUserDto} from './create-user.dto';
import {UsersService} from './users.service';
import {UserInterface} from './user.interface';
import {ValidationPipe} from '../common/pipes/validation.pipe';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {

    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body('', new ValidationPipe()) createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
    }
}