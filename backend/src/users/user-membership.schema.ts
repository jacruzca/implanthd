import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Schema } from 'mongoose';

export const UserMembershipSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    membershipUntil: {type: Date, required: true},
});

UserMembershipSchema.plugin(uniqueValidator);