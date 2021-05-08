import styled from 'styled-components';

const StyledBasketSummary = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const StyledBasketSummaryData = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 0 0 15px 15px;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  width: 40%;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  span {
    display: inline-block;
    width: max-content;

    &.price {
      font-weight: bold;
      font-size: 1.4rem;
      position: relative;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
      padding: 0 0.1rem;
    }
  }

  p {
    padding: 0.5rem 0;
    &.price {
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
`;

export const StyledBasketSummaryBack = styled.div`
  width: 60%;
  display: flex;
  align-items: end;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export default StyledBasketSummary;
