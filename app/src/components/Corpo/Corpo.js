import React from 'react';
import Section from './Section/Section';

const Corpo = () => {
    return (
        <div>
            <nav>
                <h1>Escola Amorinha</h1>
            </nav>
            <Section titulo="Cadastro de alunos" />
            <Section titulo="Consulta de alunos" />
        </div>
    );
};

export default Corpo;