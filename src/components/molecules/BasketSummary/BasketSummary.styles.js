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
  padding-top: 2rem;
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
    margin: 1rem 0;
    width: max-content;

    &.price {
      font-weight: bold;
      font-size: 1.4rem;
      position: relative;
      z-index: 3;

      &:after {
        position: absolute;
        display: block;
        content: '';
        height: 0.6rem;
        width: 100%;
        bottom: 0rem;

        background-color: ${({ theme }) => theme.colors.primary};
        z-index: -1;
      }
    }
  }

  p.price {
    font-weight: bold;
    font-size: 1.4rem;
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
`;

export default StyledBasketSummary;
