import styled from "styled-components";

export const InputLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-weight: 700;
  font-size: 1.2rem;
  input,
  textarea {
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    font-weight: 400;
    font-size: 1rem;
    width: 100%;
    padding: 8px 0;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;

    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.colors.quinary};
      border-radius: 5px;
    }
  }

  textarea {
    min-height: 100px;
  }
`;
