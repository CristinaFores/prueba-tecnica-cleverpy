import LayoutStyled from "./LayoutStyled";
import Modal from "../Modal/Modal";
import { useAppSelector } from "../../redux/hooks";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  const {
    modal: { showModal },
  } = useAppSelector((state) => state.ui);

  return (
    <>
      <LayoutStyled>
        <Header />
        {showModal && <Modal />}

        <main>
          <Outlet />
        </main>
      </LayoutStyled>
    </>
  );
};

export default Layout;
