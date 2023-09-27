import Markdown from 'react-markdown';

import { InputStyled } from '@components/styled/InputStyled';

import { ContinueButton } from '@components/styled/ContinueButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stage } from '@/types';
import { useState } from 'react';

function ScenarioStage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { stageId, stages }: { stageId: string, stages: Stage[] } = location.state;

  const currentStage = stages.find((stage) => stage.id === stageId);

  const [answer, setAnswer] = useState('')

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>()

  if (!currentStage) {
    return null;
  }

  const { content, nextStageId, type } = currentStage;

  const navigateNextStage = () => {
    if (!nextStageId) {
      return navigate('/validation');
    }
    return navigate('/stage', {
      state: {
        stageId: nextStageId,
        stages
      }
    });
  }

  return (
    <>
      <Markdown>{content}</Markdown>
      {
        type === 'RESPONSE_INPUT' &&
        <div>
          <InputStyled
            placeholder='Ta réponse'
            type='search'
            onChange={(evt) => setAnswer(evt.target.value)}
            disabled={isCorrectAnswer}
          />
          {
            !isCorrectAnswer &&
            <ContinueButton type='submit' onClick={() => setIsCorrectAnswer(currentStage.correctAnswers.includes(answer))}>
              Valider
            </ContinueButton>
          }
          {
            isCorrectAnswer &&
            <p>Bravo, tu as trouvé la bonne réponse !</p>
          }
          {
            isCorrectAnswer === false &&
            <p>Dommage, essaie encore...</p>
          }
        </div>

      }
      {
        (type === 'NO_RESPONSE' || isCorrectAnswer) &&
        <ContinueButton type='submit' onClick={navigateNextStage}>
          Continuer
        </ContinueButton>
      }
    </>
  )
}

export default ScenarioStage