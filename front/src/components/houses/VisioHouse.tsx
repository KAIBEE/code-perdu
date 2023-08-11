import { Link } from 'react-router-dom';
import visioImage from '../../assets/visio.png'
import styled from 'styled-components'
import previousImage from '../../assets/left-arrow.png'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #FFFFFF;
`;

function VisioHouse() {

    return (
        <>
            <Link className="linkPreviousButton" to='/talent'>
                <img src={previousImage} />
            </Link>

            <header>
                <Title>
                    Felicitations, tu as rejoint la maison Visiolupin !
                </Title>
            </header>

            <div>
                <img src={visioImage} alt="Art" width={200} height={233}></img>
            </div>

            <button className='continueButton'>Continuer</button>
        </>
    )
}

export default VisioHouse