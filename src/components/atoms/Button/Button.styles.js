import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.lightText};
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in-out;
  padding: 0.5rem;
  font-size: 1rem;
  height: 2.5rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 0.5rem 0;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.5);

  &:first-of-type {
    margin-top: 2rem;
  }

  &.secondary {
    background-color: transparent;
  }

  &:hover {
    font-size: 1.05rem;
    box-shadow: 1px 1px 10px 2px rgba(41, 47, 54, 0.75);
  }
`;

export default StyledButton;
