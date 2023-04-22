import { useCallback, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { hiddenModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { ModalStyled } from "./ModalStyled";

const Modal = (): JSX.Element => {
  const {
    modal: { text },
  } = useAppSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleCloseModal = useCallback(
    () => dispatch(hiddenModalActionCreator()),
    [dispatch]
  );

  useEffect(() => {
    const timer = setTimeout(handleCloseModal, 2000);
    return () => clearTimeout(timer);
  }, [handleCloseModal]);

  return (
    <ModalStyled>
      <p aria-label="Text modal">{text}</p>
    </ModalStyled>
  );
};

export default Modal;
