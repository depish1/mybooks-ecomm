import styled from 'styled-components';

const StyledSignIn = styled.div`
  width: 400px;
  max-width: 90vw;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 20px;
  margin: 2rem 1rem;
  background-color: #ffffff;

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.special};
    display: none;
    font-weight: bold;
    &.isVisible {
      display: block;
    }
  }

  .login-text {
    margin-top: 1rem;
    text-align: center;
  }
`;

export default StyledSignIn;
