import styled from 'styled-components';

const StyledHeaderIcon = styled.div`
  padding-left: 0.4rem;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledBasketCounter = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.7rem;
  height: 1.1rem;
  width: 1.1rem;
  border-radius: 50%;
  position: absolute;
  right: -0.5rem;
  top: -0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHeaderIcon;
