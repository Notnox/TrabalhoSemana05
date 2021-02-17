import React, { Fragment, useState } from 'react';
import Cadastro from './components/Cadastro/Cadastro';
import Lista from './components/Lista/Lista';
import Nav from './components/Nav/Nav';
import './App.css'

function App() {

  const [id, setId] = useState('')

  return (
    <Fragment>
      <Nav />
      <Cadastro id={id} setId={setId}/>
      <Lista setId={setId}/>
    </Fragment>
  );
}

export default App;
