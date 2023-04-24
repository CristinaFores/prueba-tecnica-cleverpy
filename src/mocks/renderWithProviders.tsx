import { RenderOptions, render } from "@testing-library/react";
import { RootState, store } from "../redux/store";
import { PreloadedState } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../redux/features/postSlice/postsSlice";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { UiState } from "../redux/features/uiSlice/types";
import { PostsState } from "../redux/features/postSlice/types";
import { UserState } from "../redux/features/userSlice/types";
import { userReducer } from "../redux/features/userSlice/userSlice";

export const mockUiModalShowState: UiState = {
  isLoading: false,
  modal: {
    isError: true,
    showModal: true,
    text: "Post deleted",
  },
};

export const initialPostState: PostsState = {
  posts: [
    {
      id: 1,
      title: "Post 1",
      body: "Body 1",
      userId: 1,
    },
  ],
};

const initialUserState: UserState = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
};

export const mockStoreModalShow: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    posts: postsReducer,
    user: userReducer,
  },
  preloadedState: {
    ui: mockUiModalShowState,
    posts: initialPostState,
    user: initialUserState,
  },
});

export interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        posts: postsReducer,
        ui: uiReducer,
        user: userReducer,
      },
      preloadedState,
    }),
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </Provider>
      </>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper }) };
};
