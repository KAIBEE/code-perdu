import { Title } from "@components/styled/Title";
import { InputStyled } from "@components/styled/InputStyled";
import { SmallParagraph } from "@components/styled/SmallParagraph";
import { ContinueButton } from "@components/styled/ContinueButton";

function FindLetter() {
    return (
        <>
            <Title>Un matin, tu te réveilles
                pour trouver une lettre
                mystérieuse scellée à l'encre dorée.
                Elle porte le sceau de l'école des
                Codes Enchantés, un établissement
                renommé où les sorciers du code
                apprennent à fusionner la magie
                et la technologie.
                <br />
                La lettre t'invite à rejoindre l'école et
                mentionne l'existence du légendaire 'Code Perdu'.
            </Title>

            <SmallParagraph>
                Trouve la lettre afin de poursuivre ta quête.
            </SmallParagraph>
            
            <div>
                <InputStyled
                    placeholder='Ta réponse'
                    type="search"
                />
            </div>

            <ContinueButton type="submit">
                Valider
            </ContinueButton>
        </>
    )
}

export default FindLetter