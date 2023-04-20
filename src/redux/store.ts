import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { postsReducer } from "./features/postSlice/postsSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
