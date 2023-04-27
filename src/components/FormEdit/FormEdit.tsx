import { useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input/Input";
import FormEditStyled from "./FormEditStyled";
import usePosts from "../../hooks/usePost/usePosts";
import { useAppSelector } from "../../redux/hooks";

const FormEdit = () => {
  const { updatePost } = usePosts();
  const { posts } = useAppSelector((state) => state.posts);
  const { id } = useParams();

  const initialPost = posts.find((post) => post.id === +id!);
  const [data, setData] = useState(initialPost!);

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const handleUpdate = async (event: React.SyntheticEvent, id: number) => {
    event.preventDefault();
    const formPostToSubmit = new FormData();

    formPostToSubmit.append("title", data.title);
    formPostToSubmit.append("body", data.body);

    const newPost = {
      ...data,
      formPostToSubmit,
    };

    await updatePost(id, newPost);
  };

  return (
    <FormEditStyled>
      <form onSubmit={(event) => handleUpdate(event, +id!)}>
        <Input
          type={"text"}
          placeholder={"Escribe tu título aquí"}
          htmlFor={"Title"}
          textLabel={"Title"}
          id={"title"}
          onChange={onChange}
          textArea={false}
        />
        <Input
          type={"text"}
          placeholder={"Escribe tu texto aquí"}
          htmlFor={"body"}
          textLabel={"Text"}
          id={"body"}
          onChangeTextArea={onChange}
          textArea={true}
        />
        <Button
          ariaLabel={"Actualizar"}
          text="Actualizar"
          type="submit"
          linkActive={false}
          disabled={false}
        />
      </form>
    </FormEditStyled>
  );
};

export default FormEdit;
