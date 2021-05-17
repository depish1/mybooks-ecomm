import styled from 'styled-components';

const StyledProductHeader = styled.header`
  height: 5.3rem;
  padding: 0.5rem 1.2rem;
  padding-top: 1rem;
  position: relative;
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
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