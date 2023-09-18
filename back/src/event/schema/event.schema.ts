import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
  })
  teams: Team[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
