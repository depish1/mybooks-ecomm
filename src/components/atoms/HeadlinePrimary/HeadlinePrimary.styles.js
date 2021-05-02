import styled from 'styled-components';

const StyledHeadlinePrimary = styled.h2`
  margin-bottom: 1rem;
  position: relative;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    display: inline-block;
    width: 120%;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: -1;
  }
`;

export default StyledHeadlinePrimary;
