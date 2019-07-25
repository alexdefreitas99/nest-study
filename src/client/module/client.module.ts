import { Module } from '@nestjs/common';
import { ClientController } from '../controller/client.controller';
import { ClientService } from '../providers/client.service';
import { clientProviders } from '../providers/client.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ClientController],
    providers: [ClientService, ...clientProviders],
    exports: [ClientService],
})
export class ClientModule { }
