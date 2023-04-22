import { renderWithProviders } from "../../mocks/renderWithProviders";
import LoginForm from "./LoginForm";
import { screen } from "@testing-library/react";

describe("Given component LoginForm", () => {
  describe("When it render", () => {
    test("Then its should show form with input and button", () => {
      renderWithProviders(<LoginForm />);

      const expectInputUser = screen.getByRole("textbox", { name: /Usuario/i });

      const expectButton = screen.getByRole("button", { name: /Entrar/i });

      expect(expectInputUser).toBeInTheDocument();
      expect(expectButton).toBeInTheDocument();
    });
  });
});
