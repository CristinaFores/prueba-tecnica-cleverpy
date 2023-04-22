import { useEffect } from "react";
import usePosts from "../../hooks/usePost/usePosts";
import ListPosts from "../ListPosts/ListPosts";
import AppStyled from "./AppStyled";
import { useAppSelector } from "../../redux/hooks";
import Modal from "../Modal/Modal";

function App() {
  const { getPosts } = usePosts();
  const {
    modal: { showModal },
  } = useAppSelector((state) => state.ui);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <AppStyled>
      {showModal && <Modal />}
      <ListPosts />
    </AppStyled>
  );
}

export default App;
