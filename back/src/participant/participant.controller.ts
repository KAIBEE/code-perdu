import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ParticipantService } from "./participant.service";
import { ParticipantDTO } from "./dto/participantDTO";
import { ParticipantRequest } from "./request/participantRequest";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('participants')
@Controller("/participants")
export class ParticipantController {
    constructor(private readonly participantService: ParticipantService) {
    }

    @Get()
    @ApiResponse({status: 200, description: "Liste retournée", type: ParticipantDTO})
    @ApiOperation({
        summary: 'Récupération de tous les participants',
        description: "Permet de récupérer tous les participants"
    })
    async getAll(): Promise<ParticipantDTO[]> {
        return await this.participantService.getAll();
    }

    @Post()
    @ApiOperation({
        summary: "Ajout d'un participant",
        description: "Permet de créer un participant en enregistrant son email"
    })
    async save(@Body() participant: ParticipantRequest) {
        await this.participantService.save(participant);
    }

    @Put(":id/complete")
    @ApiOperation({
        summary: "Enregistrement de la fin de parcours d'un participant",
        description: "Permet de mettre 'isCompleted' à 'true' pour savoir que le participant a terminé le jeu"
    })
    async completeCircuit(@Param("id") id: string) {
        await this.participantService.completeCircuit(id);
    }

    @Put(":id/email")
    @ApiOperation({
        summary: "Mise à jour de l'email d'un participant",
        description: "Permet de modifier l'email d'un participant"
    })
    async updateEmail(@Param("id") id: string, @Query("email") email: string) {
        await this.participantService.updateEmail(id, email);
    }

    @Get("/completed")
    @ApiOperation({
        summary: "Récupération de tous les participants qui ont terminé le parcours",
        description: "Permet de retourner tous les participants qui ont terminé le parcours (qui ont 'isCompleted = true')"
    })
    async getAllCompleted(): Promise<ParticipantDTO[]> {
        return await this.participantService.getAllCompleted();
    }

    @Get(":id/verify-code")
    async isValidCode(@Param("id") id: string, @Query("code") code: string): Promise<Boolean> {
        return await this.participantService.isValidCode(id, code);
    }
}