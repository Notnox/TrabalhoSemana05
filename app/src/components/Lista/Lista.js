import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../../Utils/Button/Button';
import Editar from '../../Utils/Button/Editar';
import './Lista.css'

const Lista = ({ setId }) => {

    const [alunos, setAlunos] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    const [editar, setEditar] = useState('')

    useEffect(() => {

        const params = {}

        if (pesquisa) {
            params.nome_like = pesquisa
        }

        axios.get('http://localhost:5000/alunos?_embed=autorizados', { params })
            .then((response) => {
                setAlunos(response.data)
            })
    }, [pesquisa])

    useEffect(() => {
  
        setId(editar)
    },[editar])

    return (
        <section className='body__List'>
            <header>
                <label>
                    <h3>Informe o nome do aluno</h3>
                    <input className='input__List' type='text' placeholder="Digite aqui o nome." onChange={e => setPesquisa(e.target.value)} />
                </label>
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
                                    <Editar setEditar={setEditar} item={item} />
                                </th>
                                <th>
                                    <Button item={item}/>
                                </th>
                            </tr>)
                    })}
                </tbody>
            </table>
        </section >
    );
};

export default Lista;