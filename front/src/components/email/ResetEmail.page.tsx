import { Content } from "@components/styled/Content.ts";
import { Response } from "@components/styled/Response.ts";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { ContinueButton } from "@components/styled/ContinueButton.ts";
import { useContext } from "react";
import { GameContext } from "@/context/GameContext.ts";
import { baseUrl } from "@/constants.ts";

const resetEmailSchema = yup
  .object({
    resetEmail: yup
      .string()
      .matches(new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$"), {
        message: "L'email doit être sous ce format : test@mail.com",
      })
      .required(),
  })
  .required();

const ResetEmailPage = () => {
  const navigate = useNavigate();

  const { participantId } = useContext(GameContext);

  if (!participantId) {
    // Un peu hacky mais obligatoire car, le composant n'est pas monté
    window.location.href = "/";
    return null;
  }

  const { register, handleSubmit, reset, getValues } = useForm({
    resolver: yupResolver(resetEmailSchema),
  });

  const resetEmail = () => {
    fetch(
      `${baseUrl}/participants/${participantId}/update-email?email=${getValues(
        "resetEmail",
      )}`,
      {
        method: "PUT",
      },
    );
    navigate("/validation");
  };

  return (
    <div className="view-with-button">
      <Content>
        Renseigne ton email corrigé pour recevoir ton code de participation
      </Content>
      <Response>
        <form onSubmit={handleSubmit(resetEmail)}>
          <CustomLabelInput
            inputProps={{
              ...register("resetEmail"),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  resetEmail();
                }
              },
            }}
            id={"email"}
            placeholder={"Email"}
            resetValue={() =>
              reset({
                resetEmail: "",
              })
            }
          />
        </form>
        <ContinueButton type="submit" onClick={resetEmail}>
          Corrige ton email
        </ContinueButton>
      </Response>
    </div>
  );
};

export default ResetEmailPage;
