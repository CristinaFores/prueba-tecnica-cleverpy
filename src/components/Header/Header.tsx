import { useNavigate } from "react-router";
import { ReactComponent as Logo } from "../../assets/logo-cleverpy.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import HeaderStyled from "./HeaderStyled";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logout } = useUser();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <HeaderStyled>
      <Logo onClick={handleLogoClick} />
      <h1>Cleverpy App</h1>
      {isLogged ? <Logout className="logout" onClick={logout} /> : <></>}
    </HeaderStyled>
  );
};

export default Header;
