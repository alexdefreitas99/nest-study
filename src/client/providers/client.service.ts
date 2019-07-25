import { Injectable, Inject } from '@nestjs/common';
import { Client } from '../models/client.interface';
import { Model } from 'mongoose';
import { CreateClientDto } from '../models/client.dto';

@Injectable()
export class ClientService {
    constructor(@Inject('CLIENT_MODEL') private readonly clientModel: Model<Client>) { }

    async create(createClientDto: CreateClientDto): Promise<Client> {
        const createdClient = new this.clientModel(createClientDto);
        return await createdClient.save();
    }

    async findAll(): Promise<Client[]> {
        return await this.clientModel.find().exec();
    }
}
