import styled from "styled-components";

export const InputLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.2rem;
  gap: 0.5rem;
  input,
  textarea {
    border: none;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid black;
    display: flex;

    &:focus {
      outline: none;
      border: 2px solid black;
    }
  }

  textarea {
    min-height: 100px;
  }
`;
