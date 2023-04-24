import { RouterProvider } from "react-router";
import { getComponentRouter, router } from "../router/router";
import { mockStoreModalShow, renderWithProviders } from "./renderWithProviders";

export const renderRouterWithProviders = (ui?: React.ReactElement) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(<RouterProvider router={routerWithProvider} />, {
    store: mockStoreModalShow,
  });
};
