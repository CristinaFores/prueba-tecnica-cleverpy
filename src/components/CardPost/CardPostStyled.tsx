import styled from "styled-components";

export const CardPostStyled = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: rgba(143, 143, 143, 0.75) 0px 0px 10px;
  padding: 20px 15px;
  border-radius: 5px;
  word-break: keep-all;
  display: grid;
  align-items: end;
  p,
  h2 {
    word-break: keep-all;
    margin-bottom: 0.8rem;
  }
`;
