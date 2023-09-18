import { Body, Controller, Post } from "@nestjs/common";
import { ParticipantService } from "./participant.service";
import { ParticipantDTO } from "./dto/participantDTO";

@Controller("/participant")
export class ParticipantController {
    constructor(private readonly participantService: ParticipantService) {}

    @Post()
    async save(@Body() participantDTO: ParticipantDTO) {
        await this.participantService.save(participantDTO);
    }
}