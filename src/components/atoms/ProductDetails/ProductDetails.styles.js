import styled from 'styled-components';

const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100px;
  font-size: 0.8rem;
  grid-column: 2;
  grid-row: 2;
  padding: 1rem;

  .key {
    font-weight: bold;
  }
`;

export default StyledProductDetails;
