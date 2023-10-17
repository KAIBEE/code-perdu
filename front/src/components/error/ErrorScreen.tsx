import Markdown from "react-markdown";
import { ContinueButton } from "@components/styled/ContinueButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Stage } from "@/types.ts";
import { Content } from "../styled/Content";
import { GameContext } from "@/context/GameContext";
import { useContext } from "react";
import styled from "styled-components";
import { ImageContainer } from "../styled/ImageContainer";

function ErrorScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state) {
    // Un peu hacky mais obligatoire car, le composant n'est pas monté
    window.location.href = "/";
    return null;
  }

  const { game, chosenTalent } = useContext(GameContext);

  if (!game || !chosenTalent) {
    window.location.href = "/";
    return null;
  }

  const { teams } = game;
  const { name } = teams[chosenTalent];

  const {
    stageId,
    stages,
  }: {
    stageId: string;
    stages: Stage[];
  } = location.state;

  if (!stageId || !game) {
    return null;
  }

  const navigateStage = () => {
    return navigate("/stage", {
      state: {
        stageId,
        stages,
      },
    });
  };

  const ErrorImage = styled.img`
    width: 100%;
  `
  const errorMessages = ['Adava Kedavra...', 'Doloris...', 'Impero...']; // TODO mettre dans la BDD;

  return (
    <>
      <div className="view-with-button">
        <Content>
          <Markdown>{errorMessages[Math.floor(Math.random() * errorMessages.length)]}</Markdown>
        </Content>
        <ImageContainer><ErrorImage src={`/src/assets/${name}3.png`} alt={"Lazy image"} /></ImageContainer>
        <ContinueButton type="submit" onClick={navigateStage}>
          Je retente ma chance !
        </ContinueButton>
      </div>
    </>
  );
}

export default ErrorScreen;
