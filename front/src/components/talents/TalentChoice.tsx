import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '@components/styled/Title';

import { ContinueButton } from '@components/styled/ContinueButton';
import { TalentButton } from './TalentButton';
import { Talent } from '@/types';

export type Teams = {
    teamName: string;
    teamImage: string;
}

function TalentChoice() {
    const [chosenTalent, setChosenTalent] = useState<Talent | null>(null);
    const navigate = useNavigate();

    const navigateToTeam = () => {
        if (!chosenTalent) {
            return
        }
        return navigate('/team', {
            state: {
                chosenTalent
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
                    {Boolean(chosenTalent) && <ContinueButton onClick={navigateToTeam}>Continuer</ContinueButton>}
                </div>
            </form>
        </>
    )
}

export default TalentChoice