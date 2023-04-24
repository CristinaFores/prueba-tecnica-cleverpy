import { renderRouterWithProviders } from "../../mocks/renderRouterWithProviders";
import { screen } from "@testing-library/react";
import ListPosts from "./ListPosts";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given component ListPosts", () => {
  describe("When it render", () => {
    test("Then its should show a list of posts and called the dispatch", () => {
      renderRouterWithProviders(<ListPosts />);

      const expectList = screen.getByRole("list");

      expect(expectList).toBeInTheDocument();
      expect(mockDispatch).toBeCalled();
    });
  });
});
