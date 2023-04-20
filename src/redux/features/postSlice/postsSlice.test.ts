import { loadPostsActionCreator, postsReducer } from "./postsSlice";

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
});
