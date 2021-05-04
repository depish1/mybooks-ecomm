import styled from 'styled-components';

const StyledProductPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 310px;
  min-height: 230px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightText};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightText};
  grid-column: 1;
  grid-row: 2/4;

  img {
    width: auto;
    max-height: 220px;
  }
`;

export default StyledProductPhoto;
