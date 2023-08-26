import { Title } from "../../styled/Title";
import { InputStyled } from "../../styled/InputStyled";
import { SmallParagraph } from "../../styled/SmallParagraph";

function FindLetter() {
    return (
        <>
            <Title>Un matin, tu te réveilles <br />
                pour trouver une lettre <br />
                mystérieuse scellée à l'encre dorée <br />
                Elle porte le sceau de l'école des <br />
                Codes Enchantés, un établissement<br />
                renommé où les sorciers du code <br />
                apprennent à fusionner la magie <br />
                et la technologie. <br />
                <br />
                La lettre t'invite à rejoindre l'école et <br />
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

            <button className="continueButton" type="submit">
                Valider
            </button>
        </>
    )
}

export default FindLetter