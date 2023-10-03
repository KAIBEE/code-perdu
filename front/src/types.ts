type BaseStage = {
  id: string;
  content: string;
  nextStageId: string;
  image?: string;
};

export type StageWithAnswer = BaseStage & {
  correctAnswers: string[];
  type: 'RESPONSE_INPUT';
};

export type NoResponseStage = BaseStage & {
  type: 'NO_RESPONSE';
};

export type Stage = StageWithAnswer | NoResponseStage;

export type Talent = 'FRONT' | 'BACK' | 'DEVOPS' | 'PRODUCT';

export type Team = {
  name: string;
  description: string;
  image: string;
  firstStageId: string;
  stages: Stage[];
};

export type Teams = Record<Talent, Team>;

export type Game = {
  name: string;
  teams: Teams;
}