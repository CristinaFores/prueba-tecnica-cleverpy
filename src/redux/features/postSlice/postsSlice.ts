import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post, PostsState } from "./types";

const postInitailState: PostsState = {
  posts: [],
  post: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState: postInitailState,
  reducers: {
    loadPosts: (
      currentState: PostsState,
      action: PayloadAction<Post[]>
    ): PostsState => ({
      ...currentState,
      posts: [...action.payload],
    }),
    deletePost: (
      currentState: PostsState,
      action: PayloadAction<number>
    ): PostsState => ({
      ...currentState,
      posts: currentState.posts.filter((post) => post.id !== action.payload),
    }),
    updatePost: (
      currentState: PostsState,
      action: PayloadAction<Post>
    ): PostsState => ({
      ...currentState,
      posts: currentState.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      ),
    }),
  },
});

export const postsReducer = postsSlice.reducer;

export const {
  loadPosts: loadPostsActionCreator,
  deletePost: deletePostActionCreator,
  updatePost: updatePostActionCreator,
} = postsSlice.actions;
