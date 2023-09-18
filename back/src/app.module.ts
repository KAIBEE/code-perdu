import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './event/event.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/code-perdu'),
    MongooseModule.forRoot(
      'mongodb+srv://code-perdu:MztGBVfpMpow86dc@code-perdu.ypqsujm.mongodb.net/code-perdu?retryWrites=true&w=majority',
    ),
    ParticipantModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
