import { Dispatch, SetStateAction } from "react";
import { Button } from "@components/styled/OptionButton";
import { Talent } from "@/types";

interface TalentButtonProps {
  talent: Talent;
  chosenTalent: Talent | null;
  setChosenTalent: Dispatch<SetStateAction<Talent | null>>;
}

export const TalentButton = ({
  talent,
  chosenTalent,
  setChosenTalent,
}: TalentButtonProps) => (
  <Button
    className={"talent"}
    type="button"
    value={talent}
    selected={chosenTalent === talent}
    onClick={() => setChosenTalent(talent)}
  >
    {talent}
  </Button>
);
