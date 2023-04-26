import CardPost from "../CardPost/CardPost";
import ListPostsStyled from "./ListPostsStyled";
import { Post } from "../../redux/features/postSlice/types";

interface ListPostsProps {
  posts: Post[];
}

const ListPosts = ({ posts }: ListPostsProps): JSX.Element => {
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
