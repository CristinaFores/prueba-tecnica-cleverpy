import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.primary};
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  h1 {
    font-weight: 500;
  }

  .logout:hover {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
  }

  svg {
    cursor: pointer;
  }
`;

export default HeaderStyled;
