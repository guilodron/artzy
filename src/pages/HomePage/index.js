import React, { useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Container, Artist ,TitleAndMethod, ArtDate, RightBanner, LeftBanner, Buttons, ArtInfo } from './styles';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import images from '../../data/arts.json';


const HomePage = () => {
  
  const animateLeft = useAnimation()
  const animateRight = useAnimation()
  const [currentPage, setCurrentPage] = useState({
    left: 0,
    right: 1,
  });
  const handleUp = () => {
    let current = currentPage.right + 1;
    if(current > images.length - 1) {
      setCurrentPage({
        left: 0,
        right: 1
      })
    }else {
      setCurrentPage({
        left: current,
        right: current+1
      })
    }
  }

  const handleDown = () => {
    let current = currentPage.left - 1;
    if(current < 0) {
      setCurrentPage({
        left: images.length - 2,
        right: images.length - 1
      })
    }else {
      setCurrentPage({
        left: current - 1,
        right: current
      })
    }
  }

  return (
    <Container>
      <AnimatePresence initial={false} exitBeforeEnter>
        <LeftBanner
          onMouseEnter={() => {
            animateLeft.start('hover')
          }}
          onMouseLeave={() => {
            animateLeft.start('unHover')
          }}
          key={currentPage.left}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: .4, ease:'linear'}}
        >
          <motion.img
            animate={animateLeft}
            initial='unHover'
            variants={{
              hover: {
                scale: 0.6,
                zIndex: -1
              },
              unHover: {
                scale: 1,
                zIndex: 1
              }
            }}

            transition={{ ease: 'linear', duration: 0.4 }}
            src={require(`../../asset/${images[currentPage.left].file}`)}
          >
          </motion.img>
          <ArtInfo
            initial='unHover'
            animate={animateLeft}
            variants={{
              hover: {
                opacity: 1,
              },
              unHover: {
                opacity: 0,
              }
            }}
            transition={{duration: 0.5, ease:'linear'}}
          >
            <Artist
              initial='unHover'
              animate={animateLeft}
              variants={{
                hover: {
                  opacity: 1,
                  y: 0,
                },
                unHover: {
                  opacity: 0,
                  y: -60
                }
              }}
              transition={{duration: 0.3, ease:'linear'}}
            >
              {images[currentPage.left].artist}
            </Artist>
            <TitleAndMethod>
              <span>{images[currentPage.left].title}</span>
              <span>{images[currentPage.left].method}</span>
            </TitleAndMethod>
            <ArtDate>{images[currentPage.left].date}</ArtDate>
          </ArtInfo>
        </LeftBanner>

      
        <RightBanner
          onMouseEnter={() => animateRight.start('hover')}
          onMouseLeave={() => animateRight.start('unHover')}
          key={currentPage.right}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: .4, delay: .1, ease:'linear'}}
          >
          <motion.img
            transition={{ ease: 'linear', duration: 0.4 }}
            src={require(`../../asset/${images[currentPage.right].file}`)}
            animate={animateRight}
            initial='unHover'
            variants={{
              hover: {
                scale: 0.6,
                zIndex: -1
              },
              unHover: {
                scale: 1,
                zIndex: 1
              }
            }}
            >
          </motion.img>
          <ArtInfo
            initial='unHover'
            animate={animateRight}
            variants={{
              hover: {
                opacity: 1,
              },
              unHover: {
                opacity: 0,
              }
            }}
            transition={{duration: 0.5, ease:'linear'}}
            >
            <Artist
              initial='unHover'
              animate={animateRight}
              variants={{
                hover: {
                  opacity: 1,
                  y: 0,
                },
                unHover: {
                  opacity: 0,
                  y: -60
                }
              }}
              transition={{duration: 0.3, ease:'linear'}}
              >
              {images[currentPage.right].artist}
            </Artist>
            <TitleAndMethod>
              <span>{images[currentPage.right].title}</span>
              <span>{images[currentPage.right].method}</span>
            </TitleAndMethod>
            <ArtDate>{images[currentPage.right].date}</ArtDate>
          </ArtInfo>
        </RightBanner>
      </AnimatePresence>
      <Buttons>
        <BsChevronUp 
          size={45} 
          onClick={handleUp}
        />
        <BsChevronDown 
          size={45} 
          onClick={handleDown}
        />
      </Buttons>
    </Container>
  )
}

export default HomePage
