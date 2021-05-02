import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
`;

export default StyledHeader;
