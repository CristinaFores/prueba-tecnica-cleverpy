import styled from "styled-components";

export const ModalStyled = styled.div`
  max-width: fit-content;

  max-height: fit-content;
  padding: 2rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  z-index: 1;
`;
