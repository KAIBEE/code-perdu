import { Link } from "react-router-dom";
import { Title } from "../../styled/Title";

function Introduction() {
    return (
        <>
            <Title>Dans un monde où la magie et la <br />
                technologie se mêlent, tu es Azraël <br />
                Enigmalin, un jeune sorcier du <br />
                code, talentueux et passioné. <br />
                <br />
                Depuis ton plus jeune âge, tu <br />
                rêves de percer les secrets de la <br />
                programmation ensorcelante et de <br />
                résoudre des énigmes magiques.
            </Title>

            <Link to='/findLetter'>
                <button className="continueButton">
                    Continuer
                </button>
            </Link>
        </>
    )
}

export default Introduction