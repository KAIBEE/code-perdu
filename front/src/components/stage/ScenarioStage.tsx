import Markdown from "react-markdown";
import { ContinueButton } from "@components/styled/ContinueButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Stage } from "@/types";
import { useState } from "react";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const answerSchema = yup
  .object({
    answer: yup.string().required(),
  })
  .required();

function ScenarioStage() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    stageId,
    stages,
  }: {
    stageId: string;
    stages: Stage[];
  } = location.state;

  const { register, handleSubmit, getValues } = useForm({
    resolver: yupResolver(answerSchema),
  });

  const currentStage = stages.find((stage) => stage.id === stageId);

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>();

  if (!currentStage) {
    return null;
  }

  const { content, nextStageId, type } = currentStage;

  const navigateNextStage = () => {
    if (!nextStageId) {
      return navigate("/validation");
    }
    return navigate("/stage", {
      state: {
        stageId: nextStageId,
        stages,
      },
    });
  };

  return (
    <>
      <Markdown>{content}</Markdown>
      {type === "RESPONSE_INPUT" && (
        <form onSubmit={handleSubmit(navigateNextStage)}>
          <CustomLabelInput
            id={"answer"}
            placeholder={"Ta réponse"}
            inputProps={{
              ...register("answer"),
            }}
          />
          {!isCorrectAnswer && (
            <ContinueButton
              type="submit"
              onClick={() =>
                setIsCorrectAnswer(
                  currentStage.correctAnswers.includes(getValues("answer"))
                )
              }
            >
              Valider
            </ContinueButton>
          )}
          {isCorrectAnswer && <p>Bravo, tu as trouvé la bonne réponse !</p>}
          {isCorrectAnswer === false && <p>Dommage, essaie encore...</p>}
        </form>
      )}
      {(type === "NO_RESPONSE" || isCorrectAnswer) && (
        <ContinueButton type="submit" onClick={navigateNextStage}>
          Continuer
        </ContinueButton>
      )}
    </>
  );
}

export default ScenarioStage;
