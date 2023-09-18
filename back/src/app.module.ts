import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ParticipantController } from "./participant/participant.controller";
import { ParticipantService } from "./participant/participant.service";
import { Participant, ParticipantSchema } from "./participant/schema/participant.schema";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/code-perdu'),
        MongooseModule.forFeature([{name: Participant.name, schema: ParticipantSchema}])
    ],
    controllers: [AppController, ParticipantController],
    providers: [AppService, ParticipantService],
})
export class AppModule {
}
