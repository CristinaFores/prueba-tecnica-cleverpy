import { useNavigate } from "react-router";
import { ReactComponent as Logo } from "../../assets/logo-cleverpy.svg";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <HeaderStyled>
      <Logo onClick={handleLogoClick} />
      <h1>Cleverpy App</h1>
    </HeaderStyled>
  );
};

export default Header;
