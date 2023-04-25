import {
  deletePostActionCreator,
  loadPostsActionCreator,
  postsReducer,
  updatePostActionCreator,
} from "./postsSlice";

describe("Given a postsReducer", () => {
  describe("When it recieves initial state and action'loadPosts'", () => {
    test("Then it should return a new state the posts", () => {
      const initialState = {
        posts: [],
        post: {
          userId: 0,
          id: 0,
          title: "",
          body: "",
        },
      };
      const posts = [
        {
          userId: 1,
          id: 1,
          title: "title 1",
          body: "body 1",
        },
        {
          userId: 2,
          id: 2,
          title: "title 2",
          body: "body 2",
        },
      ];
      const action = loadPostsActionCreator(posts);
      const newState = postsReducer(initialState, action);

      expect(newState).toEqual(newState);
    });
  });

  describe("When it recieves initial state and action'deletePost'", () => {
    test("Then it should return a new state without the post with  with id 1", () => {
      const initialState = {
        posts: [
          {
            userId: 1,
            id: 1,
            title: "title 1",
            body: "body 1",
          },
          {
            userId: 2,
            id: 2,
            title: "title 2",
            body: "body 2",
          },
        ],

        post: {
          userId: 0,
          id: 0,
          title: "",
          body: "",
        },
      };

      const expectecPosts = {
        posts: [
          {
            userId: 2,
            id: 2,
            title: "title 2",
            body: "body 2",
          },
        ],
        post: {
          userId: 0,
          id: 0,
          title: "",
          body: "",
        },
      };

      const action = deletePostActionCreator(1);
      const newState = postsReducer(initialState, action);

      expect(expectecPosts).toStrictEqual(newState);
    });
  });

  describe("When it recieves initial state and action'updatePost'", () => {
    test("Then it should return a new state with the post with id 1 updated", () => {
      const initialState = {
        posts: [
          {
            userId: 1,
            id: 1,
            title: "title 1",
            body: "body 1",
          },
        ],

        post: {
          userId: 0,
          id: 0,
          title: "",
          body: "",
        },
      };

      const expectecPosts = {
        posts: [
          {
            userId: 1,
            id: 1,
            title: "title 1 updated",
            body: "body 1 updated",
          },
        ],
        post: {
          userId: 0,
          id: 0,
          title: "",
          body: "",
        },
      };

      const action = updatePostActionCreator({
        userId: 1,
        id: 1,
        title: "title 1 updated",
        body: "body 1 updated",
      });
      const newState = postsReducer(initialState, action);

      expect(expectecPosts).toStrictEqual(newState);
    });
  });
});
