import styled from 'styled-components';

const StyledHeaderButtonsWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.5s ease-in-out 0.5s, background-color 0.5s ease-in-out;

  z-index: 4;

  @media only screen and (max-width: 900px) {
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
      transition: top 0.4s ease-in-out, background-color 0.4s ease-in-out 0.4s;
    }
  }
`;

export default StyledHeaderButtonsWrapper;
