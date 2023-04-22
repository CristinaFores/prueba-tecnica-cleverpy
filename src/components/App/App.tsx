import { useEffect } from "react";
import usePosts from "../../hooks/usePost/usePosts";
import ListPosts from "../ListPosts/ListPosts";
import AppStyled from "./AppStyled";

function App() {
  const { getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <AppStyled>
      <ListPosts />
    </AppStyled>
  );
}

export default App;
