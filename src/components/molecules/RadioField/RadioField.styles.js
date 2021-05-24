import styled from 'styled-components';

const StyledRadioField = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 1rem 0;
  height: 80px;
  width: 100%;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  p {
    display: flex;
    flex-direction: column;

    .option {
      font-size: 1.2rem;
      font-weight: bold;

      @media only screen and (max-width: 410px) {
        font-size: 1rem;
      }
    }
  }

  .price {
    margin-left: 2rem;
    font-weight: bold;
  }

  input {
    margin-right: 2rem;
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.colors.special};
    background-color: ${({ theme }) => theme.colors.special};
    visibility: hidden;

    &:focus {
      visibility: visible;
    }

    &::after {
      visibility: visible;
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      cursor: pointer;
      content: '';
      box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.5);
    }

    &:checked + p::after {
      margin-left: 0.2rem;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.blackHover};
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      justify-content: center;
      align-items: center;
      content: '';
    }
  }
`;

export default StyledRadioField;
