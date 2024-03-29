import usePosts from "../../hooks/usePost/usePosts";
import Button from "../Button/Button";
import { CardPostStyled, ContainerStyled } from "./CardPostStyled";

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
      <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>

      <p>{body.charAt(0).toUpperCase() + body.slice(1)}</p>

      <ContainerStyled>
        <Button
          linkActive={true}
          patch={`/edit/${id}`}
          text="Actualizar"
          ariaLabel={"Edit post"}
        />
        <Button
          text="Borrar"
          action={() => handleDelete(id!)}
          ariaLabel={"Borrar post"}
          linkActive={false}
          disabled={false}
        />
      </ContainerStyled>
    </CardPostStyled>
  );
};

export default CardPost;
