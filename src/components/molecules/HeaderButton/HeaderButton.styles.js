import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeaderButton = styled(Link)`
  height: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.4s ease;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightText};
  }
`;

export default StyledHeaderButton;