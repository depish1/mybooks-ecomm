import styled, { keyframes } from 'styled-components';

const motion = () => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(1, 1, 1, 0.6);
  position: fixed;
  left: 0;
  top: 0;
`;

export const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RingSpinner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 5rem;
  height: 5rem;
  margin: 6px;
  border: 0.5rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${(p) => motion(p)} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.colors.primary} transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;
