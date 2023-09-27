import { Team } from '../schema/team';
import { Talent } from '../schema/talent';

export class EventDto {
  readonly name: string;
  readonly teams: Record<Talent, TeamDto>;
}

export type TeamDto = Team;
