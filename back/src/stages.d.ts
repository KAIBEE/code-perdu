import { v4 } from 'uuid';

type StageType = 'NO_RESPONSE' | 'RESPONSE_INPUT';

type Stage = {
  id: v4;
  type: StageType;
  paragraphs: string[];
  nextStage: string;
};

type StageWithAnswer = Stage & {
  correctAnswers: string[];
  type: 'RESPONSE_INPUT';
};

type NoResponseStage = Stage & {
  type: 'NO_RESPONSE';
};
