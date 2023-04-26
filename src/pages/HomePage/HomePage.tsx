import { useEffect } from "react";
import ListPosts from "../../components/ListPosts/ListPosts";
import { useAppSelector } from "../../redux/hooks";
import usePosts from "../../hooks/usePost/usePosts";

const HomePage = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const { getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <ListPosts posts={posts} />
    </div>
  );
};

export default HomePage;
