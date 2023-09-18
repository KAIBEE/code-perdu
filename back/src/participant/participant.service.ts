import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Participant } from "./schema/participant.schema";
import { Model } from "mongoose";
import { ParticipantDTO } from "./dto/participantDTO";
import { ParticipantRequest } from "./request/participantRequest";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ParticipantService {
    constructor(@InjectModel(Participant.name) private participantModel: Model<Participant>) {}

    async save(participantRequest: ParticipantRequest): Promise<ParticipantDTO> {
        const participant = new this.participantModel(participantRequest);
        participant.code = uuidv4();
        return participant.save();
    }

    async getAll(): Promise<ParticipantDTO[]> {
        return this.participantModel.find().exec();
    }

    async completeCircuit(id: string) {
        await this.participantModel.findByIdAndUpdate(id, { isCompleted: true }).exec();
    }

    async updateEmail(id: string, email: string) {
        await this.participantModel.findByIdAndUpdate(id, { email }).exec();
    }

    async getAllCompleted() {
        return this.participantModel.find({ isCompleted: true }).exec();
    }
}