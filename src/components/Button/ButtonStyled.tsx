import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
  padding: 8px 12px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  border: 3px solid ${({ theme }) => theme.colors.tertiary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.tertiary};
    border: 3px solid ${({ theme }) => theme.colors.tertiary};
  }
`;

export default ButtonStyled;
