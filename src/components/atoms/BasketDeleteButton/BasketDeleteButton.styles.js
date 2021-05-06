import styled from 'styled-components';

const StyledBasketDeleteButton = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  background-color: ${({ theme }) => theme.colors.special};
  border: 2px solid ${({ theme }) => theme.colors.special};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(41, 47, 54, 0.75);
    color: ${({ theme }) => theme.colors.disabledText};
  }

  &:active {
    border: none;
  }
`;

export default StyledBasketDeleteButton;
