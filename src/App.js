import React from 'react';
import {motion} from 'framer-motion';
import Cursor from './components/Cursor';
import GlobalStyles from './globalStyles';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Cursor />
      {/* <Loading /> */}
      <HomePage />
    </>
  );
}

export default App;
