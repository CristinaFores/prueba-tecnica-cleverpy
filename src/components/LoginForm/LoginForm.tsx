import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

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
      <label>
        Usuario
        <input
          type="text"
          id="username"
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
      <label>
        Contraseña
        <input
          type="password"
          id="password"
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
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
