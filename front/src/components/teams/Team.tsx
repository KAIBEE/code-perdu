import { Link, useLocation, useNavigate } from "react-router-dom";
import previousImage from "@assets/left-arrow.png";
import { Title } from "@components/styled/Title";
import { ContinueButton } from "@components/styled/ContinueButton";
import { GameContext } from "@/context/GameContext";
import { useContext } from "react";
import { Talent } from "@/types";
import { Header } from "@components/styled/Header.ts";

function Team() {
  const navigate = useNavigate();
  const location = useLocation();

  const chosenTalent: Talent = location.state.chosenTalent;

  const { game } = useContext(GameContext);

  if (!game) {
    return null;
  }

  const { teams } = game;
  const { name, image, firstStageId, stages } = teams[chosenTalent];

  const teamImage = new URL(`../../assets/${image}`, import.meta.url).href;

  const navigateToFirstStage = () => {
    return navigate('/stage', {
      state: {
        stageId: firstStageId,
        stages,
      },
    });
  };

  return (
    <>
      <Link to="/talent">
        <img alt="Flèche de retour" src={previousImage} />
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
