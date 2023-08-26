import { Link } from "react-router-dom";
import { BigTitle } from "../../styled/BigTitle";

function MissionAcceptation() {
    return (
        <>
            <BigTitle>Ta mission si tu <br />
                l'acceptes est de percer <br />
                les secrets du Code<br />
                perdu !</BigTitle>

            <Link to='/introduction'>
                <button className="continueButton">
                    C'est parti !
                </button>
            </Link>
        </>
    )
}

export default MissionAcceptation