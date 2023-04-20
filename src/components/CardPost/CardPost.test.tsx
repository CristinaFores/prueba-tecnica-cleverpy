import { screen } from "@testing-library/react";
import CardPost from "./CardPost";
import { renderWithProviders } from "../../mocks/renderWithProviders";

describe("Given component CardPost", () => {
  describe("When it render", () => {
    test("Then its should show card with title:'Cristina and body 'text body'", () => {
      renderWithProviders(<CardPost title="Cristina" body="text body" />);

      const expectedTitle = screen.queryByRole("heading", {
        name: /Cristina/i,
      });
      const expectedBody = screen.queryByText(/text body/i);

      expect(expectedTitle).toBeInTheDocument();
      expect(expectedBody).toBeInTheDocument();
    });
  });
});
