import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BigTitle } from "@components/styled/BigTitle.ts";
import artImage from "@assets/art.jpg";
import { CustomLabelInput } from "@components/styled/CustomInput.tsx";
import { ContinueButton } from "@components/styled/ContinueButton.ts";
import styled from "styled-components";
import { InputStyled } from '@components/styled/InputStyled';
import { createParticipant } from '@/helpers/fetcher';
import { GameContext } from '@/context/GameContext';
import { useContext } from 'react';

const emailSchema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const FormContainer = styled.form`
  padding: 0 10px;
`;

const Warning = styled.p`
  display: flex;
  gap: 15px;
  color: rgb(118, 139, 134);
  background-color: rgb(18, 20, 26);
  line-height: 30px;
  padding: 10px;
  font-size: 10px;
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
      createParticipant(email).then((participantId) => {
          setParticipantId(participantId);
          return navigate('/talent', {
              state: {
                  participantId
                }
          });
      })
  }

  return (
    <>
      <header>
        <BigTitle $glowEffect padding={"20px 0px 5px 0px"}>
          Bienvenue <br />
          apprenti sorcier !
        </BigTitle>
      </header>

      <ImageContainer>
        <img
          src={artImage}
          alt="Des sorciers sur des ordinateurs"
          width={"100%"}
          height={351}
        ></img>
      </ImageContainer>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <CustomLabelInput
          id={"email"}
          placeholder={"Ton email"}
          inputProps={{ ...register("email") }}
          error={
            errors?.email?.message ? (
              <small>{errors.email.message}</small>
            ) : null
          }
          resetValue={() => reset({ email: "" })}
        />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <ContinueButton type="submit">Continuer</ContinueButton>

          <Warning>
            <span>⚠️</span>
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
