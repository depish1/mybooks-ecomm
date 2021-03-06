import styled from 'styled-components';

const StyledProductsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
  padding: 2rem 1rem;

  @media only screen and (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1630px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1980px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default StyledProductsList;
