export class EventDto {
  readonly name: string;
  readonly teams: TeamDto[];
}

export type TeamDto = Team;
