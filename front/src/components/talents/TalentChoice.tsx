import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '@components/styled/Title';
import { Button } from '@components/styled/OptionButton';
import cogiImage from '@assets/cogi.png'
import pixelImage from '@assets/pixel.png'
import dataImage from '@assets/data.png'
import visioImage from '@assets/visio.png'
import { ContinueButton } from '@components/styled/ContinueButton';

enum Talents {
    FRONT = 'Front',
    BACK = 'Back',
    DEVOPS = 'Devops',
    PRODUCT = 'Product'
}

function TalentChoice() {
    const { FRONT, BACK, DEVOPS, PRODUCT } = Talents;
    const [nextStep, setNextStep] = useState(false);
    const [isContinueVisible, setIsContinueVisible] = useState<boolean>(false);
    const [chosenTalent, setChosenTalent] = useState<string>("");
    const navigate = useNavigate();

    const renderHouse = () => {
        switch (chosenTalent) {
            case FRONT:
                return navigate("/house", {
                    state: {
                        houseName: "Pixelgriffes",
                        houseImage: pixelImage
                    }
                })
            case BACK:
                return navigate("/house", {
                    state: {
                        houseName: "Cogitrouille",
                        houseImage: cogiImage
                    }
                })
            case DEVOPS:
                return navigate("/house", {
                    state: {
                        houseName: "Datamage",
                        houseImage: dataImage
                    }
                })
            case PRODUCT:
                return navigate("/house", {
                    state: {
                        houseName: "Visiolupin",
                        houseImage: visioImage
                    }
                })
            default:
                return
        }
    }

    const onClickTalent = (talent: Talents) => {
        setChosenTalent(talent);
        setIsContinueVisible(true);
    }

    const TalentButton = ({ talent }: { talent: Talents }) =>
        <Button
            type='button'
            value={talent}
            selected={chosenTalent === talent}
            onClick={() => onClickTalent(talent)}>
            {talent}
        </Button>

    return (
        <>
            {!nextStep ? (
                <>
                    <header>
                        <Title>
                            Huuum, je vois un grand talent en toi.
                            <br /> Qu'est-ce donc ?
                        </Title>
                    </header>

                    <form>
                        <div>
                            <TalentButton talent={FRONT} />
                            <TalentButton talent={BACK} />
                        </div>
                        <div>
                            <TalentButton talent={DEVOPS} />
                            <TalentButton talent={PRODUCT} />
                        </div>
                        <div>
                            {isContinueVisible && <ContinueButton onClick={() => setNextStep(true)}>Continuer</ContinueButton>}
                        </div>
                    </form>
                </>
            ) : renderHouse()
            }
        </>
    )
}

export default TalentChoice