import { Link, useNavigate } from "react-router-dom";
import previousImage from "@assets/left-arrow.png";
import { Title } from "@components/styled/Title";
import { ContinueButton } from "@components/styled/ContinueButton";
import { GameContext } from "@/context/GameContext";
import { useContext } from "react";

import { Header } from "@components/styled/Header.ts";
import styled from "styled-components";

const BackLogo = styled.img`
  margin: 1rem 1.5rem;
`;

function Team() {
  const navigate = useNavigate();

  const { game, chosenTalent } = useContext(GameContext);

  if (!game || !chosenTalent) {
    window.location.href = "/";
    return null;
  }

  const { teams } = game;
  const { name, image, firstStageId, stages } = teams[chosenTalent];

  const teamImage = new URL(`../../assets/${image}`, import.meta.url).href;

  const navigateToFirstStage = () => {
    return navigate("/stage", {
      state: {
        stageId: firstStageId,
        stages,
      },
    });
  };

  return (
    <>
      <Link to="/talent">
        <BackLogo alt="Flèche de retour" src={previousImage} />
      </Link>
      <Header>
        <Title>Felicitations, tu as rejoint la maison {name} !</Title>
      </Header>
      <div className="view-with-button">
        <img
          src={teamImage}
          alt={`Emblème de la maison ${name}`}
          width={200}
          height={233}
        />
        <br />
        <ContinueButton onClick={navigateToFirstStage}>
          Continuer
        </ContinueButton>
      </div>
    </>
  );
}

export default Team;
