import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import AdminContext from "@/context/AdminContext.ts";
import { Title } from "@components/styled/Title.ts";
import { baseUrl } from "@/constants";

const FormContainer = styled.form({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
});

const loginSchema = yup.object().shape({
  login: yup.string().required("Le login est requis"),
  password: yup.string().required("Le mot de passe est requis"),
});

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const { setIsAuth, setLogin } = useContext(AdminContext);

  const onSubmit = async ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    const response = await fetch(`${baseUrl}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    const { success } = await response.json();
    if (!success) {
      setAuthErrorMessage("Mauvais login ou mot de passe");
    } else {
      setIsAuth(success);
      setLogin(login);
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Login</Title>
      {authErrorMessage && <small>{authErrorMessage}</small>}
      <input type="text" placeholder={"Login"} {...register("login")} />
      {errors.login?.message && <span>{errors.login.message}</span>}
      <input
        type="password"
        placeholder={"Password"}
        {...register("password")}
      />
      {errors.password?.message && <span>{errors.password.message}</span>}
      <button type="submit">Login</button>
    </FormContainer>
  );
};

export default Login;
