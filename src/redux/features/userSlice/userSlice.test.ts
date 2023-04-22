import { UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  const newUser: UserState = {
    id: "",
    token: "",
    username: "",
    isLogged: false,
  };
  describe("When it receives an initial user state and a loginUser action with a newUser", () => {
    test("Then it should  return the state with user and the property isLogged value true", () => {
      const expectedState: UserState = {
        ...newUser,
        isLogged: true,
      };

      const newState = userReducer(newUser, loginUserActionCreator(newUser));

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When it receives an logoutUser", () => {
    test("should set user data", () => {
      const expectedState: UserState = {
        id: "",
        token: "",
        username: "",
        isLogged: false,
      };

      const newStateLogout = userReducer(newUser, logoutUserActionCreator());

      expect(newStateLogout).toEqual(expectedState);
    });
  });
});
