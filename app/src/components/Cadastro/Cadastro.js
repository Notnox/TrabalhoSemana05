import React from 'react';
import Form from '../Form/Form';
import './Cadastro.css'
import { useParams } from 'react-router-dom';

const Cadastro = () => {

    const { id } = useParams()

    return   (
        <section>
            <header className='Title__Cadastro'><h2>Cadastro de Alunos</h2></header>
            <Form id={id ? Number.parseInt(id,10) : null}/>
        </section>
    );
};

export default Cadastro;