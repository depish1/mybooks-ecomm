import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.5);
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  &[type='checkbox'] {
    height: 1.5rem;
    width: 1.5rem;
    box-shadow: none;

    &:focus {
      box-shadow: none;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 1px 1px 10px 2px rgba(41, 47, 54, 0.75);
  }
`;

export default Input;
