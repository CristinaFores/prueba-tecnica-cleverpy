import { useDispatch } from "react-redux";
import { UserCredentialas } from "./types";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";

const useUser = () => {
  const dispatch = useDispatch();
  const loginUser = async (user: UserCredentialas) => {
    const token = "123456789";

    if (user.username === "admin" && user.password === "admin") {
      const userData = {
        id: "1",
        token,
        username: user.username,
      };

      dispatch(loginUserActionCreator(userData));
      localStorage.setItem("token", token);

      dispatch(
        showModalActionCreator({
          isError: false,
          text: "Bienvenido  " + user.username,
        })
      );
      return;
    }

    dispatch(
      showModalActionCreator({
        isError: true,
        text: "Usuario o contraseña incorrectos",
      })
    );
    localStorage.removeItem("token");
  };

  return { loginUser };
};

export default useUser;
