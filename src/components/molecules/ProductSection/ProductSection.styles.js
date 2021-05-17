import styled from 'styled-components';

const StyledProductSection = styled.section`
  box-shadow: 1px 1px 10px 1px rgba(41, 47, 54, 0.4);
  border-radius: 20px;
  overflow: hidden;
  width: 310px;
  margin: 0 auto;
  background-color: #ffffff;

  @media only screen and (max-width: 1030px) {
    width: 300px;
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export default StyledProductSection;
