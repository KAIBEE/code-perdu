import { Injectable } from '@nestjs/common';
import { EventRepository } from './event.repository';
import { EventDto, TeamDto } from './dto/event.dto';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async getEventById(idEvent: string): Promise<EventDto | null> {
    return await this.eventRepository.getEventById(idEvent);
  }
}
