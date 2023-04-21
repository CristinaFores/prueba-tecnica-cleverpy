import { screen } from "@testing-library/react";
import CardPost from "./CardPost";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import userEvent from "@testing-library/user-event";
import { deletePostActionCreator } from "../../redux/features/postSlice/postsSlice";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given component CardPost", () => {
  describe("When it render", () => {
    test("Then its should show card with title:'Cristina and body 'text body'", () => {
      renderWithProviders(
        <CardPost title="Cristina" body="text body" id={1} />
      );

      const expectedTitle = screen.queryByRole("heading", {
        name: /Cristina/i,
      });
      const expectedBody = screen.queryByText(/text body/i);

      expect(expectedTitle).toBeInTheDocument();
      expect(expectedBody).toBeInTheDocument();
    });
  });

  test("Then it should  call dispatch with action: deletePost, when the user click on the delete button", async () => {
    renderWithProviders(<CardPost title="Cristina" body="text body" id={1} />);

    const button = screen.getByRole("button", { name: /Delete/i });
    await userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(deletePostActionCreator(1));
  });
});
