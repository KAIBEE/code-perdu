import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../styled/ContinueButton";
import { InputStyled } from "../styled/InputStyled";
import { useState } from "react";

function Validation() {
  const navigate = useNavigate();

  const [ code, setCode ] = useState<string>();

  const navigateToEnd = () => {
    // TODO call backend to check code
    return navigate('/end');
  }
  return (
    <>
      <p>
        Finalise ton inscription en entrant le code reçu par email
      </p>
      <InputStyled
        placeholder='Ton code'
        onChange={(evt) => setCode(evt.target.value)}
      />
      <ContinueButton onClick={navigateToEnd}>Continuer</ContinueButton>
    </>
  )
}

export default Validation;