import styled from 'styled-components';

const StyledHeaderButtonsWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.7s ease-in-out 0.7s, background-color 0.7s ease-in-out;

  z-index: 4;

  @media only screen and (max-width: 840px) {
    position: absolute;
    top: calc(-100vh + 4rem);
    left: 0;
    flex-direction: column;
    height: calc(100vh - 4rem);
    width: 100%;
    justify-content: start;

    &.isVisible {
      top: 4rem;
      background-color: rgba(0, 0, 0, 0.6);
      transition: top 0.7s ease-in-out, background-color 0.7s ease-in-out 0.7s;
    }
  }
`;

export default StyledHeaderButtonsWrapper;
