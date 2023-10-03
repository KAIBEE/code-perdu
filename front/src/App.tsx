import GlobalStyle from "@components/styled/global/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import Home from "@components/home/Home";
import TalentChoice from "@components/talents/TalentChoice";
import Team from "@components/teams/Team";
import ScenarioStage from "@components/stage/ScenarioStage";

import useSWR from "swr";
import { Provider } from "./context/GameContext";
import { Game } from "./types";
import Validation from "@components/validation/Validation";
import End from "@components/end/End";
import { fetchGame } from '@/helpers/fetcher';
import { useState } from 'react';

function App() {

  const [participantId, setParticipantId] = useState<string>();

  const { data: game, isLoading } = useSWR<Game>('devFest', fetchGame);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!game && !isLoading) {
    return <p>Erreur</p>;
  }

  return (<>
    {
      game &&
      <Provider value={{
        game,
        participantId,
        setParticipantId
      }}>
        <GlobalStyle />
        <div
          style={{
            margin: "1rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talent" element={<TalentChoice />} />
            <Route path="/team" element={<Team />} />
            <Route path="/stage" element={<ScenarioStage />} />
            <Route path="/validation" element={<Validation />} />
            <Route path="/end" element={<End />} />
          </Routes>
        </div>
      </Provider>

    }</>
  );
}

export default App;
