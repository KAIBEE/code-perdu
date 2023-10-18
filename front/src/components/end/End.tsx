import { Title } from "@components/styled/Title.ts";
import { AltText } from "@components/styled/AltText";
import { ContinueButton } from "@components/styled/ContinueButton.ts";
import { useNavigate } from "react-router-dom";

function End() {
  const navigate = useNavigate();
  return (
    <>
      <Title>
        Ton inscription est bien prise en compte !<br />
        N'oublie pas de venir au tirage au sort vendredi à 16h
      </Title>
      <AltText>
        N'hésite pas à ramener tes ami(e)s pour qu'ils/elles tentent leur chance
        !
      </AltText>

      <ContinueButton
        style={{
          margin: "0px 10px",
        }}
        onClick={() => navigate("/")}
      >
        Réessayer
      </ContinueButton>
    </>
  );
}

export default End;
