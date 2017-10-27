import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Constants } from '../common/constants';
import { UserTokenModel } from './user-token.model';
import { UserTokenDto } from './user-token.dto';

@Component()
export class UserTokenService {

    constructor(@Inject(Constants.userTokenModelToken) private readonly userTokenModel: Model<UserTokenModel>) {
    }

    async findToken(user: string, token: string): Promise<UserTokenModel> {
        return await this.userTokenModel.findOne({user, token}).exec();
    }

    async createToken(token: UserTokenDto): Promise<UserTokenModel> {
        const createdToken = new this.userTokenModel(token);
        return await createdToken.save();
    }
}