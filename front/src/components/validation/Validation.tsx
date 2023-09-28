import { useNavigate } from "react-router-dom";
import { ContinueButton } from "@components/styled/ContinueButton";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(navigateToEnd)}>
      <p>Finalise ton inscription en entrant le code reçu par email</p>
      <CustomLabelInput
        id={"code"}
        placeholder="Ton code"
        inputProps={{
          ...register("code"),
        }}
      />
      <ContinueButton>Continuer</ContinueButton>
    </form>
  );
}

export default Validation;
