import cogiImage from '../../assets/cogi.png'
import previousImage from '../../assets/left-arrow.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #FFFFFF;
`;

function CogiHouse() {
    return (
        <>
            <Link className="linkPreviousButton" to='/talent'>
                <img src={previousImage} />
            </Link>

            <header>
                <Title>
                    Felicitations, tu as rejoint la maison Cogitrouille !
                </Title>
            </header>

            <div>
                <img src={cogiImage} alt="Art" width={200} height={233}></img>
            </div>

            <button className='continueButton'>Continuer</button>
        </>
    )
}

export default CogiHouse