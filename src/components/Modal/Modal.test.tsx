import {
  mockStoreModalShow,
  renderWithProviders,
} from "../../mocks/renderWithProviders";
import Modal from "./Modal";
import { screen } from "@testing-library/react";

describe("Given component Modal", () => {
  describe("When it render", () => {
    test("Then its should show modal with text:'Post deleted'", () => {
      renderWithProviders(<Modal />, { store: mockStoreModalShow });

      const modalText = screen.getByLabelText("Text modal");

      expect(modalText).toBeInTheDocument();
    });
  });
});
