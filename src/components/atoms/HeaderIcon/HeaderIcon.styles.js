import styled from 'styled-components';

const StyledHeaderIcon = styled.div`
  padding-left: 0.4rem;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    width: 40px;
    height: 40px;
  }
`;

export const StyledBasketCounter = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
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
`;

export default StyledHeaderIcon;
