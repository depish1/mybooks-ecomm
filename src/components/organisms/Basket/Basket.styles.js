import styled from 'styled-components';

const StyledBasket = styled.main`
  width: 70%;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 15px;

  @media only screen and (max-width: 1050px) {
    width: 80%;
  }
  @media only screen and (max-width: 850px) {
    width: 85%;
  }
  @media only screen and (max-width: 750px) {
    width: 95%;
  }
  @media only screen and (max-width: 650px) {
    width: 99%;
  }

  h2 {
    margin: 1.5rem 1rem;
    margin-bottom: 2rem;
  }
`;

export default StyledBasket;
