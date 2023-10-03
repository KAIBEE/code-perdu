import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Participant, ParticipantSchema } from "./schema/participant.schema";
import { ParticipantService } from "./participant.service";
import { ParticipantController } from "./participant.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Participant.name,
        schema: ParticipantSchema,
      },
    ]),
  ],
  controllers: [ParticipantController],
  providers: [ParticipantService],
})
export class ParticipantModule {}
