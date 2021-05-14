import styled from 'styled-components';

const StyledCheckout = styled.div`
  width: 400px;
  max-width: 95%;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 15px;
  background-color: #ffffff;
  margin: 1rem 0;
  padding: 2rem;
`;

export const FormWrapper = styled.div`
  width: 100%;

  .row {
   display: flex;
   justify-content: space-between;
   align-items: start;
`;
export const RadioWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export default StyledCheckout;
