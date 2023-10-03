import type { Stage } from "./stage";

export type Team = {
  name: string;
  description: string;
  image: string;
  firstStageId: string;
  stages: Stage[];
};
