import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Constants } from '../common/constants';
import { UserMembershipModel } from './user-membership.model';
import { UserMembershipDto } from './user-membership.dto';

@Component()
export class UserMembershipService {

    constructor(@Inject(Constants.userMembershipModelToken) private readonly userMembershipModel: Model<UserMembershipModel>) {
    }

    async findByUser(user: string): Promise<UserMembershipModel> {
        return await this.userMembershipModel.findOne({user}).exec();
    }

    async create(membership: UserMembershipDto): Promise<UserMembershipModel> {
        console.log(membership);
        const created = new this.userMembershipModel(membership);
        return await created.save();
    }
}