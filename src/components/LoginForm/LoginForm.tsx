import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginUser(loginData!);
    navigate("/home");
  };
  const isFormEmpty = () => {
    return Object.values(loginData).some((data) => data === "");
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nombre"
        htmlFor="username"
        textLabel="Usuario*"
        onChange={handleChange}
        id="username"
        textArea={false}
      />

      <Input
        textLabel="Contraseña*"
        id="password"
        type={"password"}
        placeholder="Contraseña"
        htmlFor={"password"}
        textArea={false}
        autoComplete="off"
        onChange={handleChange}
      />

      <Button
        ariaLabel={"Entrar"}
        text="Entrar"
        type="submit"
        disabled={isFormEmpty()}
        linkActive={false}
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
