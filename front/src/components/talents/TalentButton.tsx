import { Dispatch, SetStateAction } from "react";
import { Button } from "../styled/OptionButton";
import { Talents } from "./TalentChoice";

interface TalentButtonProps {
    talent: Talents, chosenTalent: Talents | null, setChosenTalent: Dispatch<SetStateAction<Talents | null>>
}

export const TalentButton = ({ talent, chosenTalent, setChosenTalent }: TalentButtonProps) =>

    <Button
        type='button'
        value={talent}
        selected={chosenTalent === talent}
        onClick={() => setChosenTalent(talent)}>
        {talent}
    </Button>