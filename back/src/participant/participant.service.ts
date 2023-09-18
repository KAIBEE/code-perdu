import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Participant } from "./schema/participant.schema";
import { Model } from "mongoose";
import { ParticipantDTO } from "./dto/participantDTO";

@Injectable()
export class ParticipantService {
    constructor(@InjectModel(Participant.name) private participantModel: Model<Participant>) {}

    async save(participantDTO: ParticipantDTO): Promise<Participant> {
        const participant = new this.participantModel(participantDTO);
        return participant.save();
    }
}