import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Lista.css'

const Lista = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/alunos?_embed=autorizados')
            .then((response) => {
                setAlunos(response.data)
            })
    }, [])

    return (
        <section className='body__List'>
            <header>
                <label>
                    <h3>Informe o nome do aluno</h3>
                    <input className='input__List' type='text' placeholder="Digite aqui o nome." />
                </label>
                <button className='button__List'>Pesquisar</button>
            </header>
            <table className='Table__List'>
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
                <tbody>
                    {alunos && alunos.map((item) => {
                        return (
                            <tr>
                                <th>{item.nome}</th>
                                <th>{item.data}</th>
                                <th>{item.turma}</th>
                                <th>{item.responsavelEm}</th>
                                <th>{item.avisar}</th>
                                <th>
                                    <button>Editar</button>
                                </th>
                                <th>
                                    <button>excluir</button>
                                </th>
                            </tr>)
                    })}
                </tbody>
            </table>
        </section >
    );
};

export default Lista;