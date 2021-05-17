import styled from 'styled-components';

const StyledProductHeader = styled.header`
  height: 5.7rem;
  padding: 1rem 1.2rem;
  position: relative;

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.lightText};
    position: absolute;
    bottom: 5px;
  }
`;

export default StyledProductHeader;
