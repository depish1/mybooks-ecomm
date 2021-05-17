import styled from 'styled-components';

const StyledUserTransaction = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.disabledBg};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default StyledUserTransaction;
