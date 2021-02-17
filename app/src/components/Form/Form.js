import React, { useEffect, useState } from 'react';
import Data from '../../Utils/Data/Data';
import Telefone from '../../Utils/Telefone/Telefone';
import axios from 'axios'
import './Form.css'

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
    fotos: false
};

const INITIAL_AUTORIZADOS = {
    nome: '',
    parentesco: '',
    alunoId: ''
};

const Form = ({ id }) => {

    const [valores, setValores] = useState([])
    const [valueCadastro, setValueCadastro] = useState(INITIAL_CADASTRO);
    const [autorizado, setAutorizado] = useState(INITIAL_AUTORIZADOS);
    const [autorizados, setAutorizados] = useState([]);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/alunos/${id}`)
                .then((response) => {
                    setValores(response.data)
                })
        } else {
            axios.get('http://localhost:5000/alunos?_embed=autorizados')
                .then((response) => {
                    setValores(response.data)
                });
        }
    }, [])

    useEffect(() => {
        if (!id) {
            setAutorizado({ ...autorizado, alunoId: valores.length + 1 });
            INITIAL_AUTORIZADOS.alunoId = valores.length + 1
        } else {
            setAutorizado({ ...autorizado, alunoId: id });
            INITIAL_AUTORIZADOS.alunoId = id
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valores])

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

        if (valueCadastro.nome.length === 0) { return alert('Informe um nome') };
        if (valueCadastro.responsavel.length === 0) { return alert('Informe um responsável') };
        if (valueCadastro.responsavelTell.length === 0) { return alert('Informe um telefone do responsável') };
        if (valueCadastro.responsavelEm.length === 0) { return alert('Informe um telefone de emergência') };
        if (valueCadastro.avisar.length === 0) { return alert('Informe quem deve ser avisado') };
        if (valueCadastro.turma.length === 0) { return alert('Informe uma turma') };
        if (valueCadastro.data.length === 0) { return alert('Informe a data de nascimento') };

        axios.post('http://localhost:5000/alunos', valueCadastro)

        if (autorizados) {
            autorizados.map((item) => {
                return axios.post('http://localhost:5000/autorizados', item)
            });
        }

        INITIAL_AUTORIZADOS.alunoId += 1

        setValueCadastro(INITIAL_CADASTRO)
        setAutorizado(INITIAL_AUTORIZADOS)
        setAutorizados([])

        window.location.reload(false);
    }

    return (
        <form onSubmit={onSubmit} className='body__Form'>
            <label>
                <p>Nome</p>
                <input className='input__Form' type='text' placeholder='Nome do aluno' name='nome' value={valueCadastro.nome} onChange={onChange} />
            </label>
            <label>
                <p>Responsável pelo aluno</p>
                <input className='input__Form' type='text' placeholder='Responsável pelo aluno' name='responsavel' value={valueCadastro.responsavel} onChange={onChange} />
            </label>
            <label>
                <p>Telefone do responsável</p>
                <Telefone name='responsavelTell' dados={valueCadastro} alterarDados={setValueCadastro} value={valueCadastro.responsavelTell} />
            </label>
            <label>
                <p>Telefone de emergência</p>
                <Telefone name='responsavelEm' dados={valueCadastro} alterarDados={setValueCadastro} value={valueCadastro.responsavelEm} />
            </label>
            <label>
                <p>Data de Nascimento</p>
                <Data desc="Informe a data" name='data' dados={valueCadastro} alterarDados={setValueCadastro} value={valueCadastro.data} />
            </label>
            <label>
                <input type='checkbox' checked={valueCadastro.cAlimentos} onChange={() => setValueCadastro({ ...valueCadastro, cAlimentos: !valueCadastro.cAlimentos })} /> Possui restrição alimentar?
            </label>
            {valueCadastro.cAlimentos &&
                <label>
                    <p>Descrição da restrição alimentar</p>
                    <input  type='text' placeholder='Descreva a restrição.' name='alimento' value={valueCadastro.alimento} onChange={onChange} />
                </label>
            }
            <label>
                <input type='checkbox' checked={valueCadastro.fotos} onChange={() => setValueCadastro({ ...valueCadastro, fotos: !valueCadastro.fotos })} /> Autorização de fotos e vídeos da criança para uso escolar
            </label>
            <div>
                <p className='autorizados__p'>Autorizados para retirada</p>
                {autorizados.length > 0 && autorizados.map((e) => {
                    {
                        return <section><span>Nome: {e.nome}</span><span>Parentesco: {e.parentesco}</span></section>
                    }
                })}
                <label>
                    <p>Nome</p>
                    <input className='input__Form' type='text' placeholder='Informe o nome' name='nome' onChange={onChangeAutorizado} value={autorizado.nome} />
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
                <textarea className='input__Form' placeholder="Observações adicionais" name='obs' value={valueCadastro.obs} onChange={onChange} />
            </label>
            <button type='button' onClick={() => setValueCadastro(INITIAL_CADASTRO)}>Novo</button>
            <button onSubmit={onSubmit}>Salvar</button>
        </form>
    );
};

export default Form;