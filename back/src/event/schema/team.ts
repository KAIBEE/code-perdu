import type { Stage } from './stage';

export type Team = {
  id: string;
  name: string;
  description: string;
  image: string;
  stages: Stage[];
};
