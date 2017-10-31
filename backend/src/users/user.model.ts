import {Document} from 'mongoose';

export interface UserModel extends Document {
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: string;
    readonly address: string;
    readonly city: string;
    readonly country: string;
    readonly phone: string;
    readonly mobile: string;
    readonly documentType: string;
    readonly documentNumber: string;
    readonly birthdate: string;
    readonly isProfessional: boolean;
    readonly title: string;
    readonly institution: string;
    readonly titleDate: string;
    readonly postgraduateTitle: string;
    readonly postgraduateInstitution: string;
    readonly postgraduateTitleDate: string;
}