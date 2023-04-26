import { useDispatch } from "react-redux";
import { UserCredentialas } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/userSlice/userSlice";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        loginUserActionCreator({
          id: "1",
          token,
          username: "admin",
        })
      );
    } else {
      navigate("/");
    }
  }, [dispatch, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserActionCreator());
    navigate("/");
  };

  return { loginUser, getToken, logout };
};

export default useUser;
