import styled from 'styled-components';

const StyledRadioGroup = styled.div`
  width: 100%;
  margin: 2rem 0;

  h2 {
    margin-bottom: 0.5rem;
  }
  .error {
    color: ${({ theme }) => theme.colors.special};
  }
`;

export default StyledRadioGroup;
