import { Connection } from 'mongoose';
import { ClientSchema } from '../models/client.schema';

export const clientProviders = [
    {
        provide: 'CLIENT_MODEL',
        useFactory: (connection: Connection) => connection.model('Client', ClientSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
