import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #FFFFFF;
`;

const Button = styled.button`
margin: 10px;
width: 120px;
height: 120px;
&:hover, &:focus, &:active {
    background-color: #63BFBC;
}
`;

function TalentChoice() {
    const FRONT: string = 'Front';
    const BACK: string = 'Back';
    const DEVOPS: string = 'Devops';
    const PRODUCT: string = 'Produit';
    const SUBMIT: string = 'submit';
    const [nextStep, setNextStep] = useState(false);
    const [isContinueVisible, setIsContinueVisible] = useState<boolean>(false);
    const [choicedTalent, setchoicedTalent] = useState<string>("");
    const navigate = useNavigate();

    const renderHouse = () => {
        switch (choicedTalent) {
            case FRONT:
                return navigate("/pixel")
            case BACK:
                return navigate("/cogi")
            case DEVOPS:
                return navigate("/data")
            case PRODUCT:
                return navigate("/visio")
            default:
                return
        }
    }

    const wrapperRef = useRef<HTMLButtonElement[]>(new Array<HTMLButtonElement>);

    useEffect(() => {
        function handleClick(event: Event) {
            const buttonHandled = event.target as HTMLButtonElement;

            if (!wrapperRef.current?.includes(buttonHandled)) {
                setIsContinueVisible(false)
            } else {
                setchoicedTalent((buttonHandled)?.value)
                setIsContinueVisible(true)
            }

            if (buttonHandled.type === SUBMIT) {
                setNextStep(true)
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);


    return (
        <>
            {!nextStep ? (
                <>
                    <header>
                        <Title>
                            Huuum, je vois un <br /> grand talent en toi.
                            <br /> Qu'est-ce donc ?
                        </Title>
                    </header>

                    <form>
                        <div>
                            <Button type='button' value={FRONT} ref={(el: HTMLButtonElement) => !wrapperRef.current?.includes(el) ? wrapperRef.current.push(el) : null}>
                                {FRONT}
                            </Button>
                            <Button type='button' value={BACK} ref={(el: HTMLButtonElement) => !wrapperRef.current?.includes(el) ? wrapperRef.current.push(el) : null}>
                                {BACK}
                            </Button>
                        </div>
                        <div>
                            <Button type='button' value={DEVOPS} ref={(el: HTMLButtonElement) => !wrapperRef.current?.includes(el) ? wrapperRef.current.push(el) : null}>
                                {DEVOPS}
                            </Button>
                            <Button type='button' value={PRODUCT} ref={(el: HTMLButtonElement) => !wrapperRef.current?.includes(el) ? wrapperRef.current.push(el) : null}>
                                {PRODUCT}
                            </Button>
                        </div>
                        <div>
                            {isContinueVisible && <button className='continueButton'>Continuer</button>}
                        </div>
                    </form>
                </>
            ) : renderHouse()
            }
        </>
    )
}

export default TalentChoice