import { renderRouterWithProviders } from "../../mocks/renderRouterWithProviders";
import { screen } from "@testing-library/react";
import ListPosts from "./ListPosts";

describe("Given component ListPosts", () => {
  describe("When it render", () => {
    test("Then its should show a list of posts", () => {
      renderRouterWithProviders(
        <ListPosts
          posts={[{ id: 1, title: "title", body: "body", userId: 1 }]}
        />
      );

      const expectList = screen.getByRole("list");

      expect(expectList).toBeInTheDocument();
    });
  });
});
