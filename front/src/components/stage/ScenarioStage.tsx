import Markdown from "react-markdown";
import { ContinueButton } from "@components/styled/ContinueButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Content } from "@components/styled/Content.ts";
import { Response } from "@components/styled/Response.ts";
import { Stage } from "@/types.ts";

const answerSchema = yup
  .object({
    answer: yup.string().required(),
  })
  .required();

function ScenarioStage() {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state) {
    // Un peu hacky mais obligatoire car, le composant n'est pas monté
    window.location.href = "/";
    return null;
  }

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

  const { content, nextStageId, type, image } = currentStage;

  const navigateNextStage = () => {
    if (type === "RESPONSE_INPUT" && !isCorrectAnswer) {
      return navigate("/error", {
        state: {
          stageId,
          stages,
        },
      });
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

  const loadedImage = image
    ? new URL(`../../assets/${image}`, import.meta.url).href
    : null;

  return (
    <>
      <div className="view-with-button">
        <Content>
          <Markdown>{content}</Markdown>
        </Content>
        {loadedImage && (
          <img src={loadedImage} alt={"Lazy image"} width={200} height={233} />
        )}
        <Response>
          {type === "RESPONSE_INPUT" && (
            <form onSubmit={handleSubmit(navigateNextStage)}>
              <CustomLabelInput
                id={"answer"}
                placeholder={"Ta réponse"}
                inputProps={{
                  ...register("answer"),
                }}
                resetValue={() => reset({ answer: "" })}
              />
              {isCorrectAnswer === false && (
                <p className="error">Dommage, essaie encore...</p>
              )}

              {
                <div className="text-center">
                  <ContinueButton
                    type="submit"
                    onClick={() =>
                      setIsCorrectAnswer(
                        currentStage.correctAnswers.includes(
                          getValues("answer").trim().toUpperCase(),
                        ),
                      )
                    }
                  >
                    Valider
                  </ContinueButton>
                </div>
              }
            </form>
          )}
          {type === "NO_RESPONSE" && (
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
