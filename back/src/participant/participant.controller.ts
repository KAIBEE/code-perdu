import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ParticipantService } from "./participant.service";
import { ParticipantDto } from "./dto/participant.dto";
import { ParticipantCreationRequest } from "./request/participantCreation.request";

@Controller("/participants")
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Get()
  async getAll(): Promise<ParticipantDto[]> {
    return await this.participantService.getAll();
  }

  @Post()
  async save(@Body() participant: ParticipantCreationRequest) {
    return await this.participantService.save(participant);
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
  async getAllCompleted(): Promise<ParticipantDto[]> {
    return await this.participantService.getAllCompleted();
  }

  @Get(":id/verify-code")
  async isValidCode(
    @Param("id") id: string,
    @Query("code") code: string,
  ): Promise<boolean> {
    return await this.participantService.isValidCode(id, code);
  }
}
