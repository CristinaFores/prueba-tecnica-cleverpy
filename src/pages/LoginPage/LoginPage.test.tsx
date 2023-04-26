import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import {
  mockStoreModalShow,
  renderWithProviders,
} from "../../mocks/renderWithProviders";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Given component LoginPage", () => {
  describe("When it render", () => {
    describe("Then its should show form with input and button", () => {
      test("And the dispatch will not be called", async () => {
        renderWithProviders(<LoginPage />, { store: mockStoreModalShow });
        const expectInputUser = screen.getByRole("textbox", {
          name: "Usuario*",
        });

        const passwordInput = screen.queryByLabelText("Contraseña*")!;

        const expectButton = screen.getByRole("button", {
          name: /Entrar/i,
        });

        await userEvent.click(expectButton);

        expect(mockedUseNavigate).not.toHaveBeenCalled();

        expect(expectInputUser).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(expectButton).toBeInTheDocument();
      });
    });
  });
});
