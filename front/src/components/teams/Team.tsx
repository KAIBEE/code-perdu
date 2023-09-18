import { Link, useLocation } from 'react-router-dom';
import previousImage from '@assets/left-arrow.png'
import { Title } from '@components/styled/Title';
import { ContinueButton } from '@components/styled/ContinueButton';

function Team() {
    const location = useLocation();
    const teamName: string = location.state.teamName
    const teamImage: string = location.state.teamImage

    return (
        <>
            <Link className='linkPreviousButton' to='/talent'>
                <img src={previousImage} />
            </Link>
            <header>
                <Title>
                    Felicitations, tu as rejoint la maison {teamName} !
                </Title>
            </header>
            <div>
                <img src={teamImage} alt='Art' width={200} height={233}></img>
            </div>
            <Link to='/missionAcceptation'>
                <ContinueButton>Continuer</ContinueButton>
            </Link>
        </>
    )
}

export default Team