import { useEffect } from "react";
import usePosts from "../../hooks/usePost/usePosts";
import { useAppSelector } from "../../redux/hooks";
import CardPost from "../CardPost/CardPost";
import ListPostsStyled from "./ListPostsStyled";

const ListPosts = (): JSX.Element => {
  const { posts } = useAppSelector((state) => state.posts);
  const { getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <ListPostsStyled>
      <ul>
        {posts.map((post) => (
          <CardPost
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ul>
    </ListPostsStyled>
  );
};

export default ListPosts;
