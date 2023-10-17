import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "@components/styled/Title";

import { ContinueButton } from "@components/styled/ContinueButton";
import { TalentButton } from "./TalentButton";
import { Header } from "@components/styled/Header.ts";
import { Response } from "@components/styled/Response.ts";
import styled from "styled-components";
import { GameContext } from "@/context/GameContext";

export type Teams = {
  teamName: string;
  teamImage: string;
};

const TalentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

function TalentChoice() {
  const { chosenTalent, setChosenTalent } = useContext(GameContext);
  const navigate = useNavigate();

  const navigateToTeam = () => {
    if (!chosenTalent) {
      return;
    }
    return navigate("/team");
  };

  return (
    <>
      <Header>
        <Title>
          Huuum, je vois un grand talent en toi.
          <br /> Qu'est-ce donc ?
        </Title>
      </Header>

      <form className="view-with-button">
        <TalentContainer>
          <TalentButton
            setChosenTalent={setChosenTalent}
            chosenTalent={chosenTalent}
            talent={"FRONT"}
          />
          <TalentButton
            setChosenTalent={setChosenTalent}
            chosenTalent={chosenTalent}
            talent={"BACK"}
          />
          <TalentButton
            setChosenTalent={setChosenTalent}
            chosenTalent={chosenTalent}
            talent={"DEVOPS"}
          />
          <TalentButton
            setChosenTalent={setChosenTalent}
            chosenTalent={chosenTalent}
            talent={"PRODUCT"}
          />
        </TalentContainer>
        <Response>
          {Boolean(chosenTalent) && (
            <ContinueButton onClick={navigateToTeam}>Continuer</ContinueButton>
          )}
        </Response>
      </form>
    </>
  );
}

export default TalentChoice;
