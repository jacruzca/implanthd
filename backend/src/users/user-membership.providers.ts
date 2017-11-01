import { Connection } from 'mongoose';
import { UserMembershipSchema } from './user-membership.schema';
import { Constants } from '../common/constants';

export const userMembershipProviders = [
    {
        provide: Constants.userMembershipModelToken,
        useFactory: (connection: Connection) => connection.model('UserMembership', UserMembershipSchema),
        inject: [Constants.connectionToken],
    },
];