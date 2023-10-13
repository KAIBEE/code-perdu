import { Game } from "@/types";
import { createContext } from "react";

type GameContext = {
    game: Game | undefined;
    participantId: string | undefined;
    setParticipantId: (id: string) => void;
}

export const GameContext = createContext<GameContext>({
    game: undefined,
    participantId: undefined,
    setParticipantId: () => {}
});

export const GameContextProvider = GameContext.Provider;
