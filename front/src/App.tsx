import GlobalStyle from "@components/styled/global/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import Home from "@components/home/Home";
import TalentChoice from "@components/talents/TalentChoice";
import Team from "@components/teams/Team";
import ScenarioStage from "@components/stage/ScenarioStage";

import useSWR from "swr";
import { GameContextProvider } from "./context/GameContext";
import Validation from "@components/validation/Validation";
import End from "@components/end/End";
import { fetcher } from "@/helpers/api";
import { useState } from "react";
import AdminPage from "./components/admin/AdminPage";
import { EVENT_ID } from "./constants";
import ErrorScreen from "./components/error/ErrorScreen";
import { Talent } from "@/types.ts";

function App() {
  const [participantId, setParticipantId] = useState<string>();
  const [chosenTalent, setChosenTalent] = useState<Talent | null>(null);

  const { data: game, isLoading } = useSWR(`/event/${EVENT_ID}`, fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!game && !isLoading) {
    return <p>Erreur</p>;
  }

  return (
    <>
      {game && (
        <GameContextProvider
          value={{
            game,
            participantId,
            setParticipantId,
            chosenTalent,
            setChosenTalent,
          }}
        >
          <GlobalStyle />
          <div
            style={{
              margin: "0",
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
              <Route path="/error" element={<ErrorScreen />} />
              <Route path="/validation" element={<Validation />} />
              <Route path="/end" element={<End />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
        </GameContextProvider>
      )}
    </>
  );
}

export default App;
