import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/module/client.module';
import { ClientService } from './client/providers/client.service';

@Module({
  imports: [
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
