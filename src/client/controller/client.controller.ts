import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientService } from '../providers/client.service';
import { Client } from '../models/client.interface';
import { CreateClientDto } from '../models/client.dto';

@Controller('client')
export class ClientController {

  constructor(private readonly clientService: ClientService) { }

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    this.clientService.create(createClientDto);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

}
