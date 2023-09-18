import { Body, Controller, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { ParticipantService } from "./participant.service";
import { ParticipantDTO } from "./dto/participantDTO";
import { Participant } from "./schema/participant.schema";

@Controller("/participants")
export class ParticipantController {
    constructor(private readonly participantService: ParticipantService) {
    }

    @Get()
    async getAll(): Promise<Participant[]> {
        return await this.participantService.getAll();
    }

    @Post()
    async save(@Body() participant: Participant) {
        await this.participantService.save(participant);
    }

    @Put(":id/complete")
    async completeCircuit(@Param("id") id: string) {
        await this.participantService.completeCircuit(id);
    }

    @Put(":id/email")
    async updateEmail(@Param("id") id: string, @Query("email") email: string) {
        await this.participantService.updateEmail(id, email);
    }

    @Get("/completed")
    async getAllHaveCompleted(): Promise<Participant[]> {
        return await this.participantService.getAllHaveCompleted();
    }
}