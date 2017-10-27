import { Model, ValidationError } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { UserModel } from './user.model';
import { Constants } from '../common/constants';
import { AuthSignUpDto } from '../auth/auth.signup.dto';
import { AlreadyExistsException } from '../common/exceptions/alreadyexists.exception';

@Component()
export class UsersService {

    constructor(@Inject(Constants.userModelToken) private readonly userModel: Model<UserModel>) {
    }

    async getByEmail(email: string): Promise<UserModel> {
        return await this.userModel.findOne({email}).exec();
    }

    async createSimpleUser(user: AuthSignUpDto): Promise<UserModel> {
        try {
            const createdUser = new this.userModel(user);
            return await createdUser.save();
        } catch (e) {
            if (e.name && e.name === 'ValidationError') {
                throw new AlreadyExistsException(`User ${user.email} already exists`);
            }
            throw e;
        }
    }

    async findAll(): Promise<UserModel[]> {
        return await this.userModel.find().exec();
    }

}