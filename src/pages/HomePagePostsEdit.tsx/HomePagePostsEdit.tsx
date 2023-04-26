import { useNavigate } from "react-router-dom";
import ListPosts from "../../components/ListPosts/ListPosts";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

const HomePagePostsEdit = () => {
  const { posts } = useAppSelector((state) => state.posts);

  const navigate = useNavigate();

  useEffect(() => {
    if (posts.length === 0) {
      navigate("/home");
    }
  }, [posts.length, navigate]);

  return (
    <div>
      <ListPosts posts={posts} />
    </div>
  );
};

export default HomePagePostsEdit;
