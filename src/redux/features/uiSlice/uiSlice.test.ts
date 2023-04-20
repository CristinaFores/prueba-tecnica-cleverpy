import { UiState } from "./types";
import {
  hiddenModalActionCreator,
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

const mockUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};

describe("Given a uiReducer", () => {
  describe("When it is invoked it receives the initial ui state mockUiState with isLoading", () => {
    test("Then it should return a copy of the initial state with isLoading: true", () => {
      const expectedUiState = {
        ...mockUiState,
        isLoading: true,
      };

      const newUiState = uiReducer(mockUiState, showLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("When it is invoked it receives the initial ui state mockUiState with hiddeLoading", () => {
  test("Then it should return a copy of the initial state with isLoading: false", () => {
    const expectedUiState = {
      ...mockUiState,
      isLoading: false,
    };
    const newUiState = uiReducer(mockUiState, hiddenLoadingActionCreator());

    expect(newUiState).toStrictEqual(expectedUiState);
  });
});

describe("When it is invoked it receives the initial ui state mockUiState with showModal", () => {
  test("Then it should return a copy of the initial state with showModal: true", () => {
    const expectedUiState = {
      modal: {
        isError: true,
        text: "This is error",
        showModal: true,
      },
      isLoading: false,
    };
    const expextActionPayload = {
      isError: true,
      text: "This is error",
    };

    const newUiState = uiReducer(
      mockUiState,
      showModalActionCreator(expextActionPayload)
    );

    expect(newUiState.modal).toStrictEqual(expectedUiState.modal);
  });
});

describe("When it is invoked it receives the initial ui state mockUiState with hiddenModal", () => {
  test("Then it should return a copy of the initial state with showModal: false", () => {
    const expectedUiState = {
      modal: {
        isError: false,
        text: "",
        showModal: false,
      },
      isLoading: false,
    };

    const newUiState = uiReducer(mockUiState, hiddenModalActionCreator());

    expect(newUiState.modal).toStrictEqual(expectedUiState.modal);
  });
});
