import { Title } from "@components/styled/Title.ts";
import styled from "styled-components";

function End() {
  const EndContent = styled.div`
    align-self: center;
  `;

  const StartAgain = styled.p`
    max-width: 22rem;
  `;
  return (
    <>
      <EndContent>
        <Title>
          <p>Ton inscription est bien prise en compte !</p>
          <p>Rappel du RDV tirage au sort</p>
        </Title>
        <StartAgain>
          Tu peux recommencer avec une autre maison pour augmenter tes chances
          de gagner et te mesurer aux autres énigmes si tu le souhaites !
        </StartAgain>
      </EndContent>
    </>
  );
}

export default End;
