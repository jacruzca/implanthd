import {Connection} from 'mongoose';
import {UserSchema} from './user.schema';
import {Constants} from '../common/constants';

export const usersProviders = [
    {
        provide: Constants.userModelToken,
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [Constants.connectionToken],
    },
];