import styled from 'styled-components';

const StyledBasketListElement = styled.li`
  display: flex;
  width: 100%;
  font-weight: bold;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }

  .top {
    display: grid;
    grid-template-columns: min-content 1fr;
    width: 50%;
    padding: 1rem 0;
    height: 140px;
    position: relative;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .bottom {
    display: grid;
    grid-template-columns: 30% 20% 30% 20%;
    width: 50%;
    padding: 1rem 0;
    height: 140px;
    position: relative;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .description {
    font-weight: 400;
    font-size: 0.8rem;
    position: absolute;
    top: 1rem;
    color: ${({ theme }) => theme.colors.lightText};
    font-style: italic;
  }

  .cell {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
    align-items: center;
    font-size: 1.2rem;
  }

  .name {
    align-items: start;
    justify-content: center;

    span {
      margin-top: 1rem;
      font-weight: 400;
    }
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:last-of-type {
    position: relative;

    &::after {
      position: absolute;
      display: block;
      content: '';
      width: 100%;
      z-index: 2;
      bottom: -0.5rem;
      height: 0.5rem;
      background-color: ${({ theme }) => theme.colors.black};
    }
  }

  img {
    width: auto;
    max-height: 100px;
    padding: 0 1rem;
  }
`;

export default StyledBasketListElement;
