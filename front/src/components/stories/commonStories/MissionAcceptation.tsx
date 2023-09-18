import { Link } from "react-router-dom";
import { BigTitle } from "@components/styled/BigTitle";
import { ContinueButton } from "@components/styled/ContinueButton";

function MissionAcceptation() {
    return (
        <>
            <BigTitle>Ta mission si tu
                l'acceptes est de percer
                les secrets du Code
                perdu !</BigTitle>

            <Link to='/introduction'>
                <ContinueButton>
                    C'est parti !
                </ContinueButton>
            </Link>
        </>
    )
}

export default MissionAcceptation