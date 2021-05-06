import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  font-weight: 800;

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
