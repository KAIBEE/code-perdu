import { Link } from 'react-router-dom';
import dataImage from '../../assets/data.png'
import styled from 'styled-components'
import previousImage from '../../assets/left-arrow.png'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #FFFFFF;
`;

function DataHouse() {
    return (
        <>
            <Link className="linkPreviousButton" to='/talent'>
                <img src={previousImage} />
            </Link>
            <header>
                <Title>
                    Felicitations, tu as rejoint la maison Datamage !
                </Title>
            </header>
            <div>
                <img src={dataImage} alt="Art" width={200} height={233}></img>
            </div>
            <button className='continueButton'>Continuer</button>
        </>
    )
}

export default DataHouse