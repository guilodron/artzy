import styled from 'styled-components';

export const CustomCursor = styled.div`
  position: absolute;
  z-index: 999;
  pointer-events: none;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;