import React, { useState, useEffect } from 'react';
import {CustomCursor} from './styles';

const Cursor = () => {

  const [mousePos, setMousePos] = useState({
    x: 200,
    y: 200
  })
  const handleMouseMove = (e) => {
    setMousePos({
      x: e.pageX,
      y: e.pageY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])  

  return (
    <CustomCursor style={{top: mousePos.y, left: mousePos.x}} />
  )
}

export default Cursor
