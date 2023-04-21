import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post, PostsState } from "./types";

const postInitailState: PostsState = {
  posts: [],
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
  },
});

export const postsReducer = postsSlice.reducer;

export const {
  loadPosts: loadPostsActionCreator,
  deletePost: deletePostActionCreator,
} = postsSlice.actions;
