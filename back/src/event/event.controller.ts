import { Controller, Get, Param } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventDto } from "./dto/event.dto";

@Controller("/event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(":idEvent")
  getEventById(@Param("idEvent") idEvent: string): Promise<EventDto | null> {
    return this.eventService.getEventById(idEvent);
  }
}
