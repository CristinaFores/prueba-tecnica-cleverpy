import usePosts from "../../hooks/usePost/usePosts";
import Button from "../Button/Button";

import { CardPostStyled } from "./CardPostStyled";

interface PostCardProps {
  title: string;
  body: string;
  id?: number;
}

const CardPost = ({ body, title, id }: PostCardProps): JSX.Element => {
  const { deletePost } = usePosts();

  const handleDelete = (id: number) => {
    deletePost(id!);
  };

  return (
    <CardPostStyled key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
      <Button
        text="Delete"
        action={() => handleDelete(id!)}
        ariaLabel={"Delete post"}
      />
    </CardPostStyled>
  );
};

export default CardPost;
