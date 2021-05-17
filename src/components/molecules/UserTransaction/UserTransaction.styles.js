import styled from 'styled-components';

const StyledUserTransaction = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 0.5rem 0;

  &::after {
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.disabledBg};
  }

  &:last-child {
    &::after {
      display: none;
    }
  }

  .transhead {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    margin: 0.2rem 0;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }

    &__top,
    &__bottom {
      display: flex;
      flex-direction: row;
      width: 45%;
      justify-content: space-between;
    }
  }

  p {
    display: flex;
    flex-direction: column;

    .header {
      font-size: 0.7rem;
      font-weight: bold;
      padding-bottom: 0.5rem;
    }
  }

  .translines {
    display: none;
    list-style-type: none;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.disabledBg};
    border-radius: 5px;
    padding: 0 1rem;

    &.open {
      display: block;
    }
  }

  .transline {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 0;
    position: relative;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.white};
    }

    &:last-child {
      &::after {
        display: none;
      }
    }

    &__top,
    &__bottom {
      display: flex;
      flex-direction: row;
      width: 45%;
      justify-content: space-between;
      padding: 0 2rem;
    }
  }
`;

export default StyledUserTransaction;
