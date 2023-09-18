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

export type Teams = {
    teamName: string;
    teamImage: string;
}

const teams: Record<Talents, Teams> = {
    'FRONT': {
        teamImage: pixelImage,
        teamName: 'Pixelgriffes'
    },
    'BACK': {
        teamImage: cogiImage,
        teamName: 'Cogitrouille'
    },
    'DEVOPS': {
        teamImage: dataImage,
        teamName: 'Datamage'
    },
    'PRODUCT': {
        teamImage: visioImage,
        teamName: 'Visiolupin'
    },
}

function TalentChoice() {
    const [chosenTalent, setChosenTalent] = useState<Talents | null>(null);
    const navigate = useNavigate();

    const navigateToTeam = () => {
        if (!chosenTalent) {
            return
        }
        const { teamName, teamImage } = teams[chosenTalent];
        return navigate('/team', {
            state: {
                teamName,
                teamImage,
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
                    {Boolean(chosenTalent) && <ContinueButton onClick={() => navigateToTeam()}>Continuer</ContinueButton>}
                </div>
            </form>
        </>
    )
}

export default TalentChoice