import { Injectable } from '@nestjs/common';
import { Event } from './schema/event.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventDto, TeamDto } from './dto/event.dto';

@Injectable()
export class EventRepository {
  constructor(
    @InjectModel(Event.name)
    private readonly eventEntityModel: Model<Event>,
  ) {}

  async getEventById(idEvent: string): Promise<EventDto | null> {
    return await this.eventEntityModel.findById(idEvent).exec();
  }
}
