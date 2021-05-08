import styled from 'styled-components';

const StyledLogo = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  font-weight: 800;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:active {
    background-color: ${({ theme }) => theme.colors.blackHover};
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  text-decoration: none;

  h1 {
    font-size: inherit;
  }
`;

export default StyledLogo;
