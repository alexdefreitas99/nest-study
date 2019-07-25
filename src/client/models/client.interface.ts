import { Document } from 'mongoose';

export interface Client extends Document {
    readonly name: string;
    readonly age: number;
}
