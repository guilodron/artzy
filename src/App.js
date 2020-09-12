import React from 'react';
import {motion} from 'framer-motion';
import Cursor from './components/Cursor';
import GlobalStyles from './globalStyles';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <GlobalStyles />
      <Cursor />
      <Loading />
    </>
  );
}

export default App;
