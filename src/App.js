import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

import ListsProvider from './contexts/lists';


function App() {
  
  return (
    <ListsProvider>
      <Header/>
      <Board/>

      <GlobalStyle/>
    </ListsProvider>
  );
}

export default App;
