import React, { useEffect, useState } from 'react';
import Data from '../../Utils/Data/Data';
import Telefone from '../../Utils/Telefone/Telefone';
import axios from 'axios'

const INITIAL_CADASTRO = {
    nome: '',
    responsavel: '',
    responsavelTell: '',
    responsavelEm: '',
    data: '',
    cAlimentos: false,
    alimento: '',
    avisar: '',
    turma: '',
    obs: '',
    fotos: false,
    autorizados: {}
};

const INITIAL_AUTORIZADOS = {
    nome: '',
    parentesco: ''
};

const Form = ({ }) => {

    const [valueCadastro, setValueCadastro] = useState(INITIAL_CADASTRO);
    const [autorizado, setAutorizado] = useState(INITIAL_AUTORIZADOS);
    const [autorizados, setAutorizados] = useState([]);

    const onChange = (e) => {
        const { name, value } = e.target;

        setValueCadastro({ ...valueCadastro, [name]: value });

    }

    const onChangeAutorizado = (e) => {
        const { name, value } = e.target;

        setAutorizado({ ...autorizado, [name]: value });

    }

    const adicionarAutorizado = () => {
        if (autorizado.nome.length === 0) { return alert('Informe um autorizado') };
        if (autorizado.parentesco.length === 0) { return alert('Informe o parentesco') };

        setAutorizados([...autorizados, autorizado]);
        setAutorizado(INITIAL_AUTORIZADOS);
    }

    const onSubmit = (e) => {
        e.preventDefault()

        setValueCadastro({ ...valueCadastro, autorizados: autorizados });

        axios.post('http://localhost:5000/Alunos', valueCadastro)

        setValueCadastro(INITIAL_CADASTRO)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                <p>Nome</p>
                <input type='text' placeholder='Nome do aluno' name='nome' value={valueCadastro.nome} onChange={onChange}/>
            </label>
            <label>
                <p>Responsável pelo aluno</p>
                <input type='text' placeholder='Responsável pelo aluno' name='responsavel' value={valueCadastro.responsavel} onChange={onChange}/>
            </label>
            <label>
                <p>Telefone do responsável</p>
                <Telefone name='responsavelTell' dados={valueCadastro} alterarDados={setValueCadastro} value={valueCadastro.responsavelTell}/>
            </label>
            <label>
                <p>Telefone de emergência</p>
                <Telefone name='responsavelEm' dados={valueCadastro} alterarDados={setValueCadastro} value={valueCadastro.responsavelEm}/>
            </label>
            <label>
                <p>Data de Nascimento</p>
                <Data desc="Informe a data" name='data' dados={valueCadastro} alterarDados={setValueCadastro} value={valueCadastro.data}/>
            </label>
            <label>
                <input type='checkbox' checked={valueCadastro.cAlimentos} onChange={() =>  setValueCadastro({ ...valueCadastro, cAlimentos: !valueCadastro.cAlimentos })}/> Possui restrição alimentar?
            </label>
            {valueCadastro.cAlimentos &&
                <label>
                    <p>Descrição da restrição alimentar</p>
                    <input type='text' placeholder='Descreva a restrição.' name='alimento' value={valueCadastro.alimento} onChange={onChange}/>
                </label>
            }
            <label>
                <input type='checkbox' checked={valueCadastro.fotos} onChange={() =>  setValueCadastro({ ...valueCadastro, fotos: !valueCadastro.fotos })}/> Autorização de fotos e vídeos da criança para uso escolar
            </label>
            <div>
                <p>Autorizados para retirada</p>
                {autorizados.length > 0 && autorizados.map((e) => {
                    {
                        return <section><span>{e.nome}</span><span>{e.parentesco}</span></section>
                    }
                })}
                <label>
                    <p>Nome</p>
                    <input type='text' placeholder='Informe o nome' name='nome' onChange={onChangeAutorizado} value={autorizado.nome} />
                </label>
                <label>
                    <p>Parentesco</p>
                    <select name='parentesco' onChange={onChangeAutorizado} value={autorizado.parentesco}>
                        <option value='Selecione'>Selecione</option>
                        <option value='Pais'>Pais</option>
                        <option value='Irmão/ã'>Irmão/ã</option>
                        <option value='Tios'>Tios</option>
                        <option value='Avós'>Avós</option>
                    </select>
                </label>
                <button type='button' onClick={adicionarAutorizado}>+</button>
            </div>
            <label>
                <p>Em caso de emergência avisar:</p>
                <select name='avisar' value={valueCadastro.avisar} onChange={onChange}>
                    <option value='Selecione'>Selecione</option>
                    <option value='Pais'>Pais</option>
                    <option value='Irmão/ã'>Irmão/ã</option>
                    <option value='Tios'>Tios</option>
                    <option value='Avós'>Avós</option>
                </select>
            </label>
            <label>
                <p>Turma</p>
                <select name='turma' value={valueCadastro.turma} onChange={onChange}>
                    <option value='Selecione'>Selecione</option>
                    <option value='A12'>A12</option>
                    <option value='B5'>B5</option>
                    <option value='B7'>B7</option>
                    <option value='C15'>C15</option>
                </select>
            </label>
            <label>
                <p>Observações adicionais</p>
                <textarea placeholder="Observações adicionais" name='obs' value={valueCadastro.obs} onChange={onChange}/>
            </label>
            <button type='button' onClick={() => setValueCadastro(INITIAL_CADASTRO)}>Novo</button>
            <button onSubmit={onSubmit}>Salvar</button>
        </form>
    );
};

export default Form;