import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s ease-in-out;
  transition: background-color 0.1s ease-out, color 0.1s ease-out, box-shadow 0.4s ease-out, height 0.4s ease-out;
  padding: 0.7rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 0.5rem 0;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.5);

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;

    &:active {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(41, 47, 54, 0.75);
  }

  &:active {
    box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.5);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBg};
    color: ${({ theme }) => theme.colors.disabledText};
    cursor: default;

    &:hover {
      box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.5);
      background-color: ${({ theme }) => theme.colors.disabledBg};
    }
  }
`;

export default StyledButton;
