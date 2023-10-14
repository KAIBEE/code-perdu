import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Participant } from "./schema/participant.schema";
import { Model } from "mongoose";
import { ParticipantDto } from "./dto/participant.dto";
import { ParticipantCreationRequest } from "./request/participantCreation.request";
import { stringToHash } from "src/util";
import { sendMail } from "src/email/send_mail";

@Injectable()
export class ParticipantService {
  constructor(
    @InjectModel(Participant.name)
    private participantModel: Model<Participant>,
  ) {}

  async save(
    participantRequest: ParticipantCreationRequest,
  ): Promise<ParticipantDto> {
    const existing = await this.participantModel
      .findOne({
        email: participantRequest.email,
      })
      .exec();
    if (existing) {
      return existing;
    }
    const participant = new this.participantModel(participantRequest);
    participant.code = stringToHash(participant.email);
    const savedParticipant = participant.save();
    sendMail(participant.email, "Code de validation", participant.code);
    return savedParticipant;
  }

  async getAll(): Promise<ParticipantDto[]> {
    return this.participantModel.find().exec();
  }

  async completeCircuit(id: string) {
    await this.participantModel
      .findByIdAndUpdate(id, { isCompleted: true })
      .exec();
  }

  async updateEmail(id: string, email: string) {
    const updatedParticipant = await this.participantModel
      .findByIdAndUpdate(id, { email })
      .exec();
    if (updatedParticipant) {
      sendMail(
        updatedParticipant.email,
        "Code de validation",
        updatedParticipant.code,
      );
    }
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
