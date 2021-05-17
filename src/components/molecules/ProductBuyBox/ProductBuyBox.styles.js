import styled from 'styled-components';

const StyledProductBuyBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: white;
  padding: 0.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 11.5rem;
  .price {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.special};
  }

  .successMsg {
    background-color: ${({ theme }) => theme.colors.successBg};
    color: ${({ theme }) => theme.colors.successText};
    border: 2px solid ${({ theme }) => theme.colors.successText};
    display: none;
    padding: 0.2rem 1rem;
    font-weight: bold;

    &.isVisible {
      display: block;
    }
  }
`;

export default StyledProductBuyBox;
