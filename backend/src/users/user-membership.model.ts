import { Document } from 'mongoose';

export interface UserMembershipModel extends Document {
    readonly user: string;
    readonly email: string;
    readonly membershipUntil: Date;
}