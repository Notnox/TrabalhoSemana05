import React from 'react';
import Form from '../Form/Form';
import './Cadastro.css'

const Cadastro = ({ id }) => {


    return   (
        <section>
            <header className='Title__Cadastro'><h2>Cadastro de Alunos</h2></header>
            <Form  id={id ? Number.parseInt(id,10) : null}/>
        </section>
    );
};

export default Cadastro;