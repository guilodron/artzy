import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;

`;

export const LeftBanner = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;

  }
`;

export const RightBanner = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    width: 100%;
    width: 100%;
    height: 100%;
  }
`;

export const Buttons = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 2;
  background: white;
  border-radius: 100px 100px 0 0;  
  height: 80px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: black;
    margin: 10px 8px 0 8px;
    cursor: pointer;
    transition: transform 0.2s linear;

    &:hover {
      transform: translateY(-5%);
    }
  }
`;

export const ArtInfo = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12vh 0 5vh 0;

`;

export const Artist = styled(motion.span)`
  font-size: 6rem;
  text-align: center;
`;

export const TitleAndMethod = styled.div`
  display: flex;
  margin-top: 80px;
  width: 100%;
  justify-content: space-between;
  z-index: 2;

  span {
    font-size: 1.2rem;  
    transform: rotateZ(-90deg);
    margin: 0;
  }

  span + span {
    transform: rotateZ(90deg);
  }
`;

export const ArtDate = styled(motion.span)`
  font-size: 12rem;
  font-weight: thin;
  align-self: flex-end;
  margin-right: 10%;
`;