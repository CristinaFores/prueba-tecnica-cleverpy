import LayoutStyled from "./LayoutStyled";
import Modal from "../Modal/Modal";
import { useAppSelector } from "../../redux/hooks";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  const {
    modal: { showModal },
  } = useAppSelector((state) => state.ui);

  return (
    <>
      <LayoutStyled>
        {showModal && <Modal />}
        <div className="main">
          <main>
            <Outlet />
          </main>
        </div>
      </LayoutStyled>
    </>
  );
};

export default Layout;
