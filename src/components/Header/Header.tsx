import { ReactComponent as Logo } from "../../assets/logo-cleverpy.svg";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <h1>Cleverpy App</h1>
    </HeaderStyled>
  );
};

export default Header;
