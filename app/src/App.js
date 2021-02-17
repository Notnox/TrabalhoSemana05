import React, { Fragment } from 'react';
import Cadastro from './components/Cadastro/Cadastro';
import Lista from './components/Lista/Lista';
import Nav from './components/Nav/Nav';
import './App.css'

function App() {
  
  return (
    <Fragment>
      <Nav />
      <Cadastro />
      <Lista />
    </Fragment>
  );
}

export default App;
