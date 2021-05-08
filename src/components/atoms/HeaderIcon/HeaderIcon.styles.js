import styled from 'styled-components';

const StyledHeaderIcon = styled.div`
  padding-left: 0.4rem;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    width: 32px;
    height: 32px;

    @media only screen and (max-width: 841px) {
      fill: ${({ theme }) => theme.colors.secondary};
    }

    @media only screen and (max-width: 1000px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledBasketCounter = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  position: absolute;
  right: -0.5rem;
  top: -0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 841px) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (max-width: 1000px) {
    font-size: 0.8rem;
    height: 1.2rem;
    width: 1.2rem;
  }
`;

export default StyledHeaderIcon;
