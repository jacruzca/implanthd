import {Model} from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import {UserInterface} from './user.interface';
import {CreateUserDto} from './create-user.dto';
import {Constants} from '../common/constants';

@Component()
export class UsersService {

    constructor(@Inject(Constants.userModelToken) private readonly userModel: Model<UserInterface>) {
    }

    async create(createUserDto: CreateUserDto): Promise<UserInterface> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<UserInterface[]> {
        return await this.userModel.find().exec();
    }

}