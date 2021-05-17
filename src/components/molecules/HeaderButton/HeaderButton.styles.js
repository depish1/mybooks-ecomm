import styled from 'styled-components';

const StyledHeaderButton = styled.button`
  height: 2rem;
  font-weight: bold;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 1.6rem 1rem;
  border-radius: 0.5rem;
  margin: 0 1rem;
  text-decoration: none;
  @media only screen and (max-width: 1100px) {
    margin: 0 0.3rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    border-radius: 0;
    z-index: 2;
    margin: 0;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
  @media only screen and (min-width: 901px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.blackHover};
    }
  }
`;

export default StyledHeaderButton;
