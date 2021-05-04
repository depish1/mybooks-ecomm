import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export default StyledHeader;
