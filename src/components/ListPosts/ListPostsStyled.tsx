import styled from "styled-components";

const ListPostsStyled = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 1.5rem;
  }
`;

export default ListPostsStyled;
