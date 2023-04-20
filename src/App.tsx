import { useEffect } from "react";
import usePosts from "./hooks/usePost/usePosts";

function App() {
  const { getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return <div></div>;
}

export default App;
