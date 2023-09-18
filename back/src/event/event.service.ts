import { Injectable } from '@nestjs/common';
import { EventRepository } from './event.repository';
import { EventDto, TeamDto } from './dto/event.dto';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async getDevFestEvent(): Promise<EventDto | null> {
    return await this.eventRepository.getDevFestEvent();
  }

  async getEventById(idEvent: string): Promise<EventDto | null> {
    return await this.eventRepository.getEventById(idEvent);
  }

  async getTeamsByEvent(idEvent: string): Promise<TeamDto[] | null> {
    return await this.eventRepository.getTeamsByEvent(idEvent);
  }
}
