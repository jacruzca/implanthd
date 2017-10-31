import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    gender: String,
    address: String,
    city: String,
    country: String,
    phone: String,
    mobile: String,
    documentType: String,
    documentNumber: String,
    birthdate: String,
    isProfessional: Boolean,
    title: String,
    institution: String,
    titleDate: String,
    postgraduateTitle: String,
    postgraduateInstitution: String,
    postgraduateTitleDate: String,
});

UserSchema.plugin(uniqueValidator);