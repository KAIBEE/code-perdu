import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Team } from 'src/event/schema/team';

@Schema()
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  active: boolean;

  @Prop({
    required: true,
  })
  teams: Team[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
