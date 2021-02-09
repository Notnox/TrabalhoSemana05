import React from 'react';

const Lista = () => {
    return (
        <table>
            <tr>
                <th>Nome</th>
                <th>Data de nascimento</th>
                <th>Turma</th>
                <th>Telefone para Emergências</th>
                <th>Em caso de emergência avisar</th>
                <th colSpan="2">Ferramentas</th>
            </tr>
        </table>
    );
};

export default Lista;