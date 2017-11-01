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

    async getById(id: string): Promise<UserModel> {
        return await this.userModel.findById(id, {password: 0}).exec();
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

    async updateUser(id: string, user: UserModel): Promise<UserModel> {
        return await this.userModel.update({_id: id}, user).exec();
    }

    async updateUserProfileImage(id: string, image: string): Promise<UserModel> {
        return await this.userModel.update(
            {_id: id},
            {$set: {profileImage: image}})
            .exec();
    }

    async findAll(): Promise<UserModel[]> {
        return await this.userModel.find().exec();
    }

}