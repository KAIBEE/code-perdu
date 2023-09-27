import { v4 } from 'uuid';

type StageType = 'NO_RESPONSE' | 'RESPONSE_INPUT';

export type Stage = {
  id: typeof v4;
  type: StageType;
  paragraphs: string[];
  nextStageId: typeof v4;
};

export type StageWithAnswer = Stage & {
  correctAnswers: string[];
  type: 'RESPONSE_INPUT';
};

export type NoResponseStage = Stage & {
  type: 'NO_RESPONSE';
};
