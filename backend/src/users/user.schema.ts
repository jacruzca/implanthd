import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: String,
});

UserSchema.plugin(uniqueValidator);