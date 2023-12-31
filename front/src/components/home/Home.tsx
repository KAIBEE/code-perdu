import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BigTitle } from "@components/styled/BigTitle.ts";
import artImage from "@assets/art.jpg";
import infoLogo from "@assets/info.svg";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { ContinueButton } from "@components/styled/ContinueButton.ts";
import styled from "styled-components";
import { createAndSendEmailParticipant } from "@/helpers/api";
import { GameContext } from "@/context/GameContext";
import { useContext } from "react";
import { ImageContainer } from "../styled/ImageContainer";

const emailSchema = yup
  .object({
    email: yup
      .string()
      .matches(new RegExp("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$"), {
        message: "L'email doit être sous ce format : test@mail.com",
      })
      .required(),
  })
  .required();

const FormContainer = styled.form`
  padding: 0 10px;
`;

const Warning = styled.p`
  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  color: #708c91;
  font-size: 13px;
  line-height: 2dvh;
`;

const Image = styled.img`
  max-height: 42.5dvh;
`;

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  const navigate = useNavigate();

  const { setParticipantId } = useContext(GameContext);

  const onSubmit = ({ email }: { email: string }) => {
    createAndSendEmailParticipant(email).then((participantId) => {
      setParticipantId(participantId);
      return navigate("/talent", {
        state: {
          participantId,
        },
      });
    });
  };

  return (
    <>
      <header>
        <BigTitle $glowEffect padding={"2.5dvh 0px 1dvh 0px"}>
          Bienvenue <br />
          apprenti sorcier !
        </BigTitle>
      </header>

      <ImageContainer>
        <Image
          src={artImage}
          alt="Des sorciers sur des ordinateurs"
          width={"100%"}
          height={351}
        ></Image>
      </ImageContainer>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <CustomLabelInput
          id={"email"}
          placeholder={"Ton email"}
          inputProps={{ ...register("email") }}
          error={
            errors?.email?.message ? <small>{"Email non valide"}</small> : null
          }
          resetValue={() => reset({ email: "" })}
        />
        <div
          style={{
            marginTop: "2.5dvh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "3dvh",
          }}
        >
          <ContinueButton type="submit">Continuer</ContinueButton>

          <Warning>
            <img src={infoLogo} alt="" />
            L'adresse mail collectée sera utilisée pour le tirage au sort. En
            indiquant mon adresse mail, j'autorise également Kaïbee à me
            contacter.
          </Warning>
        </div>
      </FormContainer>
    </>
  );
}

export default Home;
