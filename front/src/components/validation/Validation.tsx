import { useNavigate } from "react-router-dom";
import { ContinueButton } from "@components/styled/ContinueButton";
import { InputStyled } from "@components/styled/InputStyled";

function Validation() {
  const navigate = useNavigate();

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
      />
      <ContinueButton onClick={navigateToEnd}>Continuer</ContinueButton>
    </>
  )
}

export default Validation;