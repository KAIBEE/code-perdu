import { Game, Talent } from "@/types";
import { createContext } from "react";

type GameContext = {
    game: Game | undefined;
    participantId: string | undefined;
    setParticipantId: (id: string) => void;
    chosenTalent: Talent | null;
    setChosenTalent: (talent: Talent) => void;
}

export const GameContext = createContext<GameContext>({
    game: undefined,
    participantId: undefined,
    setParticipantId: () => {},
    chosenTalent: null,
    setChosenTalent: () => {}
});

export const GameContextProvider = GameContext.Provider;
