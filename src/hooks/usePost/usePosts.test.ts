import { renderHook } from "@testing-library/react";
import usePosts from "./usePosts";
import { store } from "../../redux/store";
import ProviderWrapper from "../../mocks/ProviderWrapper";
import {
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";

const dispatchSpyON = jest.spyOn(store, "dispatch");

describe("Given the usePosts custom hook", () => {
  describe("When it's function getPosts is invoked", () => {
    test("Then it's should dispatch", async () => {
      const { result } = renderHook(() => usePosts(), {
        wrapper: ProviderWrapper,
      });

      await result.current.getPosts();

      expect(dispatchSpyON).toBeCalled();
    });
  });

  describe("When it's function getPosts is invoked with response has status 404", () => {
    test("Then it' should be invoked with showLoadingActionCreator, hiddenLoadingActionCreator and showLoadingActionCreator", async () => {
      const { result } = renderHook(() => usePosts(), {
        wrapper: ProviderWrapper,
      });

      await result.current.getPosts();

      expect(dispatchSpyON).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );

      expect(dispatchSpyON).toHaveBeenNthCalledWith(
        2,
        hiddenLoadingActionCreator()
      );
      expect(dispatchSpyON).toHaveBeenNthCalledWith(
        3,
        showModalActionCreator({
          isError: true,
          text: "No hay ningun post disponible",
        })
      );
    });

    describe("When it's function deletePost is invoked", () => {
      test("Then it's should be called the dispatch", async () => {
        const { result } = renderHook(() => usePosts(), {
          wrapper: ProviderWrapper,
        });

        await result.current.deletePost(1);

        expect(dispatchSpyON).toBeCalled();
      });
    });
  });
});
