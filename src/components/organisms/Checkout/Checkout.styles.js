import styled from 'styled-components';

const StyledCheckout = styled.div`
  width: 500px;
  max-width: 95%;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 20px;
  background-color: #ffffff;
  margin: 1rem 0;
  padding: 2rem;

  @media only screen and (max-width: 600px) {
    width: 400px;
  }

  @media only screen and (max-width: 400px) {
    padding: 2rem 1rem;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
`;
export const RadioWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export default StyledCheckout;
