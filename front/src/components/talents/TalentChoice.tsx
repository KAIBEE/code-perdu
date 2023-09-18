import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '@components/styled/Title';
import cogiImage from '@assets/cogi.png'
import pixelImage from '@assets/pixel.png'
import dataImage from '@assets/data.png'
import visioImage from '@assets/visio.png'
import { ContinueButton } from '@components/styled/ContinueButton';
import { TalentButton } from './TalentButton';

export type Talents = 'FRONT' | 'BACK' | 'DEVOPS' | 'PRODUCT'

export type Houses = {
    houseName: string;
    houseImage: string;
}

const houses: Record<Talents, Houses> = {
    'FRONT': {
        houseImage: pixelImage,
        houseName: "Pixelgriffes"
    },
    'BACK': {
        houseImage: cogiImage,
        houseName: "Cogitrouille"
    },
    'DEVOPS': {
        houseImage: dataImage,
        houseName: "Datamage"
    },
    'PRODUCT': {
        houseImage: visioImage,
        houseName: "Visiolupin"
    },
}

function TalentChoice() {
    const [chosenTalent, setChosenTalent] = useState<Talents | null>(null);
    const navigate = useNavigate();

    const renderHouse = () => {
        if (!chosenTalent) {
            return
        }
        const { houseName, houseImage } = houses[chosenTalent];
        return navigate("/house", {
            state: {
                houseName,
                houseImage,
            }
        })
    }

    return (
        <>
            <header>
                <Title>
                    Huuum, je vois un grand talent en toi.
                    <br /> Qu'est-ce donc ?
                </Title>
            </header>

            <form>
                <div>
                    <TalentButton setChosenTalent={setChosenTalent} chosenTalent={chosenTalent} talent={'FRONT'} />
                    <TalentButton setChosenTalent={setChosenTalent} chosenTalent={chosenTalent} talent={'BACK'} />
                </div>
                <div>
                    <TalentButton setChosenTalent={setChosenTalent} chosenTalent={chosenTalent} talent={'DEVOPS'} />
                    <TalentButton setChosenTalent={setChosenTalent} chosenTalent={chosenTalent} talent={'PRODUCT'} />
                </div>
                <div>
                    {Boolean(chosenTalent) && <ContinueButton onClick={() => renderHouse()}>Continuer</ContinueButton>}
                </div>
            </form>
        </>
    )
}

export default TalentChoice