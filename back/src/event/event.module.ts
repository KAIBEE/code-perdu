import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventRepository } from './event.repository';
import { EventController } from './event.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './schema/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [EventController],
  providers: [EventService, EventRepository],
})
export class EventModule {}
