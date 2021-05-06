import styled from 'styled-components';

const StyledBackButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.disableBg};
  text-decoration: underline;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }

  svg {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    fill: ${({ theme }) => theme.colors.disableBg};
  }
`;

export default StyledBackButton;
