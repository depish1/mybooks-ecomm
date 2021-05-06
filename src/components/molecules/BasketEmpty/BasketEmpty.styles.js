import styled from 'styled-components';

const StyledBasketEmpty = styled.div`
  width: 100%;
  height: 30vh;

  color: ${({ theme }) => theme.colors.disabledBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-weight: bold;
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

  svg {
    fill: ${({ theme }) => theme.colors.lightText};
    width: 8rem;
    height: 8rem;

    /* @media only screen and (max-width: 1000px) {
      width: 24px;
      height: 24px;
    } */
  }
`;

export default StyledBasketEmpty;
