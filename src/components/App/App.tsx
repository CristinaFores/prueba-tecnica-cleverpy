import { useEffect } from "react";
import useUser from "../../hooks/useUser/useUser";
import Layout from "../Layout/Layout";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const { getToken } = useUser();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <AppStyled>
      <Layout />
    </AppStyled>
  );
};

export default App;
