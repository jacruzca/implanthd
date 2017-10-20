import * as mongoose from 'mongoose';
import {Constants} from '../common/constants';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            const connection = await mongoose.connect(Constants.databaseUrl, {
                useMongoClient: true,
            });
            return connection;
        },
    },
];