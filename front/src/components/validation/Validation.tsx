import { useNavigate } from "react-router-dom";
import { ContinueButton } from "@components/styled/ContinueButton";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Content } from "@components/styled/Content.ts";
import { Response } from "@components/styled/Response.ts";

const validationSchema = yup.object({
  code: yup.string().required(),
});

function Validation() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigateToEnd = () => {
    // TODO call backend to check code
    return navigate("/end");
  };
  return (
    <form className="view-with-button" onSubmit={handleSubmit(navigateToEnd)}>
      <Content>
        Finalise ton inscription en entrant le code reçu par email
      </Content>
      <Response>
        <CustomLabelInput
          id={"code"}
          placeholder="Ton code"
          inputProps={{
            ...register("code"),
          }}
        />
        <ContinueButton>Continuer</ContinueButton>
      </Response>
    </form>
  );
}

export default Validation;
