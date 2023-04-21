import {
  deletePostActionCreator,
  loadPostsActionCreator,
  postsReducer,
} from "./postsSlice";

describe("Given a postsReducer", () => {
  describe("When it recieves initial state and action'loadPosts'", () => {
    test("Then it should return a new state the posts", () => {
      const initialState = {
        posts: [],
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
      };

      const action = deletePostActionCreator(1);
      const newState = postsReducer(initialState, action);

      expect(expectecPosts).toStrictEqual(newState);
    });
  });
});
