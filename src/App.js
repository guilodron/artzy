import React from 'react';
import Cursor from './components/Cursor';
import GlobalStyles from './globalStyles';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Cursor />
      <Loading />
      <Header />
      <HomePage />
    </>
  );
}

export default App;
