import Markdown from "react-markdown";
import { ContinueButton } from "@components/styled/ContinueButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Stage } from "@/types";
import { useState, useEffect } from "react";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Content } from "@components/styled/Content.ts";
import { Response } from "@components/styled/Response.ts";

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

  const { register, handleSubmit, getValues, reset } = useForm({
    resolver: yupResolver(answerSchema),
  });

  const currentStage = stages.find((stage) => stage.id === stageId);

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>();

  // reset component state when stageId changes
  useEffect(() => {
    reset();
    setIsCorrectAnswer(undefined);
  }, [stageId, reset]);

  if (!currentStage) {
    return null;
  }

  const { content, nextStageId, type } = currentStage;

  const navigateNextStage = () => {
    if (type === "RESPONSE_INPUT" && !isCorrectAnswer) {
      return;
    }
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
      <div className="view-with-button">
        <Content>
          <Markdown>{content}</Markdown>
        </Content>
        <Response>
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
                <div className="text-center">
                  <ContinueButton
                    type="submit"
                    onClick={() =>
                      setIsCorrectAnswer(
                        currentStage.correctAnswers.includes(
                          getValues("answer").toUpperCase(),
                        ),
                      )
                    }
                  >
                    Valider
                  </ContinueButton>
                </div>
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
        </Response>
      </div>
    </>
  );
}

export default ScenarioStage;
