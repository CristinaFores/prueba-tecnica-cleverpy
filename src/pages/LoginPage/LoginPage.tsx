import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../redux/hooks";

const LoginPage = () => {
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  return <> {isLogged ? navigate("/home") : <LoginForm />}</>;
};

export default LoginPage;
