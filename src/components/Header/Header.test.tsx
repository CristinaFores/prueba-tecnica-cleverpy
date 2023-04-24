import { renderRouterWithProviders } from "../../mocks/renderRouterWithProviders";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given component Header", () => {
  describe("When it render", () => {
    test("Then its should show a heading level 1 with title:'Cleverpy App", () => {
      renderRouterWithProviders(<Header />);

      const expectTitle = screen.getByRole("heading", {
        name: /Cleverpy App/i,
        level: 1,
      });

      expect(expectTitle).toBeInTheDocument();
    });
  });
});
