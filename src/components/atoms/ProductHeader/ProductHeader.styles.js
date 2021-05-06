import styled from 'styled-components';

const StyledProductHeader = styled.header`
  height: 4.7rem;
  padding: 0.5rem 1.2rem;
  position: relative;
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    margin-top: 0.3rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.lightText};
    position: absolute;
    bottom: 5px;
  }
`;

export default StyledProductHeader;
