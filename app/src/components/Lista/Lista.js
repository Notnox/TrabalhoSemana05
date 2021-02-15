import React from 'react';

const Lista = () => {
    return (
        <section>
            <header>
                <label>
                    <h3>Informe o nome do aluno</h3>
                    <input type='text' placeholder="Digite aqui o nome." />
                </label>
                <button>Pesquisar</button>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de nascimento</th>
                        <th>Turma</th>
                        <th>Telefone para Emergências</th>
                        <th>Em caso de emergência avisar</th>
                        <th colSpan="2">Ferramentas</th>
                    </tr>
                </thead>
            </table>
        </section >
    );
};

export default Lista;