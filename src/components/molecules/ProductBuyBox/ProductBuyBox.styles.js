import styled from 'styled-components';

const StyledProductBuyBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: white;
  padding: 0.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .price {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.special};
    margin: 0.5rem 0;
  }
`;

export default StyledProductBuyBox;
