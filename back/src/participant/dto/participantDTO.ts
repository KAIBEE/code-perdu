import { ApiProperty } from "@nestjs/swagger";

export class ParticipantDTO {
    @ApiProperty({example: "exemple@email.fr", description: "Email du participant"})
    readonly email: string;

    @ApiProperty({
        example: "55bd7ce1-4760-4e5d-9e22-814ca3b8cc8b",
        description: "Code pour valider l'email du participant"
    })
    readonly code: string;

    @ApiProperty({example: true, description: "Indique si le participant a terminé le parcours"})
    readonly isCompleted: boolean;
}