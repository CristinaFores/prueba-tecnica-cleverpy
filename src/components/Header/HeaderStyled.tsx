import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.primary};
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  h1 {
    font-weight: 500;
  }

  svg {
    cursor: pointer;
  }
`;

export default HeaderStyled;
