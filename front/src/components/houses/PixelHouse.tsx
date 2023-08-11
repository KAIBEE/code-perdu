import { Link } from 'react-router-dom';
import pixelImage from '../../assets/pixel.png'
import styled from 'styled-components'
import previousImage from '../../assets/left-arrow.png'


const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #FFFFFF;
`;

function PixelHouse() {
    return (
        <>
            <Link className="linkPreviousButton" to='/talent'>
                <img src={previousImage} />
            </Link>

            <header>
                <Title>
                    Felicitations, tu as rejoint la maison Pixelgriffes !
                </Title>
            </header>

            <div>
                <img src={pixelImage} alt="Art" width={200} height={233}></img>
            </div>

            <button className='continueButton'>Continuer</button>
        </>
    )
}

export default PixelHouse