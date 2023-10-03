import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ParticipantDocument = HydratedDocument<Participant>;

@Schema()
export class Participant {
  @Prop({ required: true })
  email: string;

  @Prop({ unique: true })
  code: string;

  @Prop({ default: false })
  isCompleted: boolean;

  @Prop({ default: false })
  isCodeValidated: boolean;
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);
