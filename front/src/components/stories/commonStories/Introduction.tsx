import { Link } from "react-router-dom";
import { Title } from "@components/styled/Title";
import { ContinueButton } from "@components/styled/ContinueButton";

function Introduction() {
    return (
        <>
            <Title>Dans un monde où la magie et la
                technologie se mêlent, tu es Azraël 
                Enigmalin, un jeune sorcier du
                code, talentueux et passionné.
                <br /><br />
                Depuis ton plus jeune âge, tu
                rêves de percer les secrets de la
                programmation ensorcelante et de
                résoudre des énigmes magiques.
            </Title>

            <Link to='/findLetter'>
                <ContinueButton>
                    Continuer
                </ContinueButton>
            </Link>
        </>
    )
}

export default Introduction