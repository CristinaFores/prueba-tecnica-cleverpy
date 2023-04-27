import { renderRouterWithProviders } from "../../mocks/renderRouterWithProviders";
import HomePage from "./HomePage";
import { screen } from "@testing-library/react";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given component HomePage", () => {
  describe("When it render", () => {
    describe("Then its should show a list of posts,a button with text: 'Delete post' and headdind with text 'Post 1' level 2", () => {
      test("And the dispatch should be called", () => {
        renderRouterWithProviders(<HomePage />);

        const expectList = screen.getByRole("list");
        const expectButton = screen.getByRole("button", {
          name: /Borrar post/i,
        });
        const expectHeading = screen.getByRole("heading", {
          name: /Post 1/i,
          level: 2,
        });

        expect(expectList).toBeInTheDocument();
        expect(expectButton).toBeInTheDocument();
        expect(expectHeading).toBeInTheDocument();

        expect(mockDispatch).toBeCalled();
      });
    });
  });
});
