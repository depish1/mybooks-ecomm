import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.4s ease-in-out;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 0.5rem 0;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.5);

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;

    &:active {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(41, 47, 54, 0.75);
  }

  &:active {
    height: 2.1rem;
  }
`;

export default StyledButton;
