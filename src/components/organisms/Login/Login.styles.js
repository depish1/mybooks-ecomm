import styled from 'styled-components';

const StyledLogin = styled.form`
  width: 400px;
  max-width: 90vw;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 20px;
  margin: 2rem 1rem;

  .login-text {
    margin-top: 1rem;
    text-align: center;
  }
`;

export default StyledLogin;
