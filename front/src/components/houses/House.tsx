import { Link, useLocation } from 'react-router-dom';
import previousImage from '@assets/left-arrow.png'
import { Title } from '@components/styled/Title';
import { ContinueButton } from '@components/styled/ContinueButton';

function House() {
    const location = useLocation();
    const houseName: string = location.state.houseName
    const houseImage: string = location.state.houseImage

    return (
        <>
            <Link className="linkPreviousButton" to='/talent'>
                <img src={previousImage} />
            </Link>
            <header>
                <Title>
                    Felicitations, tu as rejoint la maison {houseName} !
                </Title>
            </header>
            <div>
                <img src={houseImage} alt="Art" width={200} height={233}></img>
            </div>
            <Link to='/missionAcceptation'>
            <ContinueButton>Continuer</ContinueButton>
            </Link>
        </>
    )
}

export default House