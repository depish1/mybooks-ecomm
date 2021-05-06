import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeaderButton = styled(Link)`
  height: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
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

  @media only screen and (max-width: 1000px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightText};
  }

  &:active {
    padding: 1.4rem 1rem;
  }
`;

export default StyledHeaderButton;
