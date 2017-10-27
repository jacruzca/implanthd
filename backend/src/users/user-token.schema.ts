import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Schema } from 'mongoose';

export const UserTokenSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, required: true},
    token: {type: String, required: true},
});

UserTokenSchema.plugin(uniqueValidator);