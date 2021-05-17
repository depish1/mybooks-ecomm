import styled from 'styled-components';

const StyledHamburgerButton = styled.button`
  height: 0.6rem;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 1.6rem 1rem;
  width: 4rem;
  transition: background-color 0.4s ease;
  border-radius: 0.5rem;
  margin-right: 1rem;

  @media only screen and (min-width: 900px) {
    display: none;
  }

  &.isOpen {
    span {
      padding: 0;
      &.hamburger- {
        &top {
          top: 50%;

          transform: rotate(45deg);
        }
        &bottom {
          top: 50%;

          transform: rotate(-45deg);
        }
      }
    }
  }

  span {
    width: 3rem;
    display: block;
    height: 0.25rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    left: 50%;
    transition: transform 0.8s ease-in-out;
    &.hamburger- {
      &top {
        top: 1.1rem;
      }
      &bottom {
        bottom: 1.1rem;
      }
    }
  }
`;

export default StyledHamburgerButton;
