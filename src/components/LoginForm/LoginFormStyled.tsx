import styled from "styled-components";

const LoginFormStyled = styled.form`
  margin: 0 auto;
  padding: 3rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: rgba(185, 185, 185, 0.75) 0px 0px 10px;
  max-width: 400px;
`;
export default LoginFormStyled;
