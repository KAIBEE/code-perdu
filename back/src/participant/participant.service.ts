import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Participant } from "./schema/participant.schema";
import { Model } from "mongoose";
import { ParticipantDto } from "./dto/participant.dto";
import { ParticipantCreationRequest } from "./request/participantCreation.request";
import { stringToHash } from "src/util";

@Injectable()
export class ParticipantService {
  constructor(
    @InjectModel(Participant.name)
    private participantModel: Model<Participant>,
  ) {}

  async save(
    participantRequest: ParticipantCreationRequest,
  ): Promise<ParticipantDto> {
    const participant = new this.participantModel(participantRequest);
    participant.code = stringToHash(participant.email);
    return participant.save();
  }

  async getAll(): Promise<ParticipantDto[]> {
    return this.participantModel.find().exec();
  }

  async completeCircuit(id: string) {
    const participant = await this.participantModel
      .findByIdAndUpdate(id, { isCompleted: true })
      .exec();
    if (participant) {
      // TODO: Send mail
      // await sendMail(participant.email, 'Code de validation', participant.code);
    }
  }

  async updateEmail(id: string, email: string) {
    await this.participantModel.findByIdAndUpdate(id, { email }).exec();
  }

  async getAllCompleted() {
    return this.participantModel.find({ isCompleted: true }).exec();
  }

  async isValidCode(id: string, code: string): Promise<boolean> {
    const participant = await this.participantModel.findById(id).exec();
    if (participant && participant.code === code) {
      await this.participantModel
        .findByIdAndUpdate(id, {
          isCodeValidated: true,
        })
        .exec();
    }
    return participant?.code === code;
  }

  async getAllCompletedAndVerified() {
    return this.participantModel
      .find({
        isCompleted: true,
        isCodeValidated: true,
      })
      .exec();
  }
}
