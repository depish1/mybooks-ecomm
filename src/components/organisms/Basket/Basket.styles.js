import styled from 'styled-components';

const StyledBasket = styled.main`
  width: 70%;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 20px;
  background-color: #ffffff;

  margin: 1rem 0;
  @media only screen and (max-width: 1050px) {
    width: 80%;
  }
  @media only screen and (max-width: 850px) {
    width: 85%;
  }
  @media only screen and (max-width: 750px) {
    width: 95%;
  }

  h2 {
    margin: 2rem;
  }
`;

export default StyledBasket;
