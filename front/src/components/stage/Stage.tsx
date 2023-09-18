import { Title } from '@components/styled/Title';
import { InputStyled } from '@components/styled/InputStyled';
import { SmallParagraph } from '@components/styled/SmallParagraph';
import { ContinueButton } from '@components/styled/ContinueButton';
import { BigTitle } from '../styled/BigTitle';

function Stage() {
    const navigateNextStage = () => {
        console.log('To be implemented');
    }
    return (
        <>
            <BigTitle>Placeholder gros titre</BigTitle>

            <Title>Placeholder titre
            </Title>

            <SmallParagraph>
                Placeholder petit
            </SmallParagraph>

            <div>
                <InputStyled
                    placeholder='Ta réponse'
                    type='search'
                />
            </div>

            <ContinueButton type='submit' onClick={navigateNextStage}>
                Valider
            </ContinueButton>
        </>
    )
}

export default Stage