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

  async getDevFestEvent(): Promise<EventDto | null> {
    return await this.eventEntityModel.findOne({ name: 'DevFest' }).exec();
  }

  async getEventById(idEvent: string): Promise<EventDto | null> {
    return await this.eventEntityModel.findById(idEvent).exec();
  }

  async getTeamsByEvent(idEvent: string): Promise<TeamDto[] | null> {
    const event = await this.getEventById(idEvent);
    if (!event) return null;
    return event.teams;
  }
}
