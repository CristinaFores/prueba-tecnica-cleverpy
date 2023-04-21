import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import {
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "../../redux/features/postSlice/postsSlice";
import { useCallback } from "react";
import { Post } from "../../redux/features/postSlice/types";

const usePosts = () => {
  const dispatch = useAppDispatch();
  const urlApi = "https://jsonplaceholder.typicode.com/";

  const getPosts = useCallback(async () => {
    dispatch(showLoadingActionCreator());
    try {
      const { data } = await axios.get<Post[]>(`${urlApi}posts`);
      dispatch(hiddenLoadingActionCreator());
      dispatch(loadPostsActionCreator(data));
    } catch (error: unknown) {
      dispatch(hiddenLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          text: "No hay ningun post disponible",
        })
      );
    }
  }, [dispatch]);

  const deletePost = async (id: number) => {
    await dispatch(deletePostActionCreator(id));

    dispatch(
      showModalActionCreator({
        isError: false,
        text: "La publicacion ha sido eliminada",
      })
    );
  };

  return { getPosts, deletePost };
};

export default usePosts;
