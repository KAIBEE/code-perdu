import { useNavigate } from "react-router-dom";
import { ContinueButton } from "@components/styled/ContinueButton";

import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Content } from "@components/styled/Content.ts";
import { Response } from "@components/styled/Response.ts";
import { checkCode } from "@/helpers/api";
import { GameContext } from "@/context/GameContext";
import { useContext, useState } from "react";

const validationSchema = yup.object({
  code: yup.string().required(),
});

function Validation() {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isInvalidCode, setIsInvalidCode] = useState(false);

  const { participantId } = useContext(GameContext);

  if (!participantId) {
    // Un peu hacky mais obligatoire car, le composant n'est pas monté
    window.location.href = "/";
    return null;
  }

  const navigateToEnd = () => {
    const { code } = getValues();
    if (code) {
      checkCode(participantId, code).then((isCodeValid: boolean) => {
        if (isCodeValid) {
          return navigate("/end");
        }
        setIsInvalidCode(true);
      });
    }
  };

  return (
    <form className="view-with-button" onSubmit={handleSubmit(navigateToEnd)}>
      <Content>
        <p>
          Bravo, après avoir percé tous les secrets des sortilèges numériques
          oubliés, te voilà en possession du Code perdu !
        </p>
        <p>
          Tu es maintenant digne de tenter de remporter un voyage à Poudlard.
        </p>
        <p>
          Pour cela, finalise ton inscription en indiquant ton code reçu par
          mail (il te servira pour le tirage au sort)
        </p>
      </Content>
      <Response>
        <CustomLabelInput
          id={"code"}
          placeholder="Ton code"
          inputProps={{
            ...register("code"),
          }}
        />
        {isInvalidCode && <p className="error">Code invalide !</p>}
        <ContinueButton>Continuer</ContinueButton>
      </Response>
    </form>
  );
}

export default Validation;
