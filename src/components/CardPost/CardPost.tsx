import { CardPostStyled } from "./CardPostStyled";

interface PostCardProps {
  title: string;
  body: string;
  id?: number;
}

const CardPost = ({ body, title, id }: PostCardProps): JSX.Element => {
  return (
    <CardPostStyled key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
    </CardPostStyled>
  );
};

export default CardPost;
