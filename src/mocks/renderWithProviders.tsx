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
      },
      preloadedState,
    }),
    ...renderOptions
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
