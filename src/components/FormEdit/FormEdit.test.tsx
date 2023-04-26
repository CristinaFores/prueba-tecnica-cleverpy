import { renderRouterWithProviders } from "../../mocks/renderRouterWithProviders";
import FormEdit from "./FormEdit";
import { screen } from "@testing-library/react";

describe("Given component FormEdit", () => {
  describe("When it render", () => {
    test("Then its should show a form with inputs and button", () => {
      renderRouterWithProviders(<FormEdit />);

      const expectInputTitle = screen.getAllByText("Text");

      const expectInputText = screen.getAllByRole("textbox");

      const expectButton = screen.getByRole("button", {
        name: /Update/i,
      });

      expect(expectInputTitle[0]).toBeInTheDocument();
      expect(expectInputText[1]).toBeInTheDocument();
      expect(expectButton).toBeInTheDocument();
    });
  });
});
