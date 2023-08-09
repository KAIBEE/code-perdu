import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #FFFFFF;
`;

const Button = styled.button`
margin: 20px;
width: 140px;
height: 140px;
&:hover &:focus{
    background-color: #63BFBC;
}
&:focus {
    background-color: #63BFBC;
}
`;

function TalentChoice() {
    const {
        handleSubmit,
    } = useForm();

    const [isContinueVisible, setIsContinueVisible] = useState(false);

    const onSubmit = () => {
        setIsContinueVisible(true)
    }

    return (
        <>
            <header>
                <Title>
                    Huuum, je vois un <br /> grand talent en toi.
                    <br /> Qu'est-ce donc ?
                </Title>
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Button>
                    Front
                </Button>
                <Button>
                    Back
                </Button>
                <br />
                <Button>
                    Devops
                </Button>
                <Button>
                    Produit
                </Button>
            </form>
        {isContinueVisible && <button className='continueButton'>Continuer</button>}
        </>
    )
}

export default TalentChoice