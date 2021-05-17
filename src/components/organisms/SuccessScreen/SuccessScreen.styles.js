import styled from 'styled-components';

const StyledSuccessScreen = styled.div`
  width: 400px;
  max-width: 95%;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 20px;
  background-color: #ffffff;
  margin: 1rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.successText};
    width: 5rem;
    height: 5rem;
  }

  p {
    margin: 1rem 0;
  }
`;

export default StyledSuccessScreen;
