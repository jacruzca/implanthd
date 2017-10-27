import { Document } from 'mongoose';
import { UserModel } from './user.model';

export interface UserTokenModel extends Document {
    readonly user: UserModel;
    readonly token: string;
}