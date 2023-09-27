import { Link, useLocation, useNavigate } from 'react-router-dom';
import previousImage from '@assets/left-arrow.png'
import { Title } from '@components/styled/Title';
import { ContinueButton } from '@components/styled/ContinueButton';
import { GameContext } from '@/context/GameContext';
import { useContext } from 'react';
import { Talent } from '@/types';

function Team() {
  const navigate = useNavigate();
  const location = useLocation();

  const chosenTalent: Talent = location.state.chosenTalent;

  const game = useContext(GameContext);

  if (!game) {
    return null;
  }

  const { teams } = game;
  const { name, image, scenario } = teams[chosenTalent];

  const teamImage = new URL(image, import.meta.url).href;

  const navigateToFirstStage = () => {
    const { firstStageId, stages } = scenario;
    return navigate('/stage', {
      state: {
        stageId: firstStageId,
        stages
      }
    })
  }

  return (
    <>
      <Link className='linkPreviousButton' to='/talent'>
        <img src={previousImage} />
      </Link>
      <header>
        <Title>
          Felicitations, tu as rejoint la maison {name} !
        </Title>
      </header>
      <div>
        <img src={teamImage} alt='Art' width={200} height={233}></img>
      </div>
      <ContinueButton onClick={navigateToFirstStage}>Continuer</ContinueButton>
    </>
  )
}

export default Team