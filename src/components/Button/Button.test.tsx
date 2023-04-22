import { renderWithProviders } from "../../mocks/renderWithProviders";
import Button from "./Button";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given component Button", () => {
  describe("When it render", () => {
    test("Then its should show button with text:'Delete' and the action on click", async () => {
      const buttonAction = jest.fn();

      renderWithProviders(
        <Button
          text="Delete"
          ariaLabel={"Delete"}
          action={buttonAction}
          type={undefined}
        />
      );

      const expectedButton = screen.queryByRole("button", {
        name: /Delete/i,
      });

      await userEvent.click(expectedButton!);

      expect(expectedButton).toBeInTheDocument();
      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
