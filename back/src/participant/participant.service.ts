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

    async getAll(): Promise<Participant[]> {
        return this.participantModel.find().exec();
    }

    async completeCircuit(id: string) {
        await this.participantModel.findByIdAndUpdate(id, { isCompleted: true }).exec();
    }

    async updateEmail(id: string, email: string) {
        await this.participantModel.findByIdAndUpdate(id, { email }).exec();
    }
}