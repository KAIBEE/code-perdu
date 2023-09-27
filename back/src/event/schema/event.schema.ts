import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Team } from 'src/event/schema/team';
import type { Talent } from './talent';
import { Types } from 'mongoose';

@Schema()
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    type: Types.Map,
  })
  teams: Record<Talent, Team>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
