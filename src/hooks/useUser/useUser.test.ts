import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import ProviderWrapper from "../../mocks/ProviderWrapper";
import { store } from "../../redux/store";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";

const dispatchSpyON = jest.spyOn(store, "dispatch");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Given a useUser custom hook", () => {
  describe("When it's function loginUser is invoked with userData, correct credencials", () => {
    test("Then it's should be called the dispatch with loginUserActionCreator and showModalActionCreator", async () => {
      const { result } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const userData = {
        id: "1",
        username: "admin",
        password: "admin",
        token: "123456789",
      };

      await result.current.loginUser(userData);

      expect(dispatchSpyON).toHaveBeenNthCalledWith(
        1,
        loginUserActionCreator({
          username: userData.username,
          id: userData.id,
          token: userData.token,
        })
      );

      expect(dispatchSpyON).toHaveBeenNthCalledWith(
        2,
        showModalActionCreator({
          isError: false,
          text: "Bienvenido  " + userData.username,
        })
      );
    });

    describe("When it's function loginUser is invoked with userData, incorrect credencials", () => {
      test("Then it's should be called the dispatch with showModalActionCreator", async () => {
        const { result } = renderHook(() => useUser(), {
          wrapper: ProviderWrapper,
        });
        const userData = {
          id: "1",
          username: "admin",
          password: "Error",
          token: "123456789",
        };

        await result.current.loginUser(userData);

        expect(dispatchSpyON).toHaveBeenNthCalledWith(
          1,
          showModalActionCreator({
            isError: true,
            text: "Usuario o contraseña incorrectos",
          })
        );
      });
    });
  });
});
