import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  svg {
    width: 30vw;
    height: 20vh;
  }
`;