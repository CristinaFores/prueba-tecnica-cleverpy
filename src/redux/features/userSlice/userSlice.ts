import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (
      previusUserState: UserState,
      action: PayloadAction<User>
    ): UserState => {
      const { id, token, username } = action.payload;
      return { ...previusUserState, id, token, username, isLogged: true };
    },

    logoutUser: (previusUserState: UserState): UserState => {
      return { ...initialState };
    },
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
