import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Container;
