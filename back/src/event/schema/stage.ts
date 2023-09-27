type StageType = 'NO_RESPONSE' | 'RESPONSE_INPUT';

type BaseStage = {
  id: string;
  type: StageType;
  content: string;
  nextStageId: string;
};

export type StageWithAnswer = BaseStage & {
  correctAnswers: string[];
  type: 'RESPONSE_INPUT';
};

export type StageWithAnswerAndImage = BaseStage &
  StageWithAnswer & {
    image: string;
  };

export type NoResponseStage = BaseStage & {
  type: 'NO_RESPONSE';
};

export type Stage = StageWithAnswer | NoResponseStage | StageWithAnswerAndImage;
