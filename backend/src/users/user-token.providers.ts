import { Connection } from 'mongoose';
import { UserTokenSchema } from './user-token.schema';
import { Constants } from '../common/constants';

export const userTokenProviders = [
    {
        provide: Constants.userTokenModelToken,
        useFactory: (connection: Connection) => connection.model('UserToken', UserTokenSchema),
        inject: [Constants.connectionToken],
    },
];