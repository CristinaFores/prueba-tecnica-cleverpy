import styled from "styled-components";

const ButtonStyled = styled.div`
  width: 100%;
  display: flex;

  button,
  a {
    background-color: ${({ theme }) => theme.colors.tertiary};
    width: 100%;
    padding: 8px 12px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    border: 3px solid ${({ theme }) => theme.colors.tertiary};
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.tertiary};
      border: 3px solid ${({ theme }) => theme.colors.tertiary};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.quaternary};
      border: 3px solid ${({ theme }) => theme.colors.quaternary};
      color: ${({ theme }) => theme.colors.primary};
      cursor: not-allowed;
    }
  }
`;

export default ButtonStyled;
