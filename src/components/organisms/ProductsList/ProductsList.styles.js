import styled from 'styled-components';

const StyledProductsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 2rem;
  column-gap: 1.5rem;
  row-gap: 3rem;

  @media only screen and (min-width: 690px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1030px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1370px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1710) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 2050px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default StyledProductsList;
