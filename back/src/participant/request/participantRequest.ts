import { ApiProperty } from "@nestjs/swagger";

export class ParticipantRequest {
    @ApiProperty({example: "exemple@email.fr", description: "L'email du nouveau participant"})
    email: string;
}