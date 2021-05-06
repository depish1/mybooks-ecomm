import styled from 'styled-components';

const StyledBasketListElement = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 7% 13% 34% 15% 6% 15% 10%;
  max-height: 140px;
  font-weight: bold;
  padding: 1rem 0;

  div {
    display: flex;
    justify-content: center;

    &.center {
      align-items: center;
    }

    &.name {
      flex-direction: column;
      align-items: top;
      justify-content: left;

      span {
        margin-top: 2rem;
        font-weight: 400;
      }
    }
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.disabledText};
  }

  img {
    width: auto;
    max-height: 100px;
  }
`;

export default StyledBasketListElement;
