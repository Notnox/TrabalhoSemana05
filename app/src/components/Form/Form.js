import React, { useEffect, useState } from 'react';
import Data from '../../Utils/Data/Data';
import Telefone from '../../Utils/Telefone/Telefone';

const INITIAL_CADASTRO = {
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
    const [alimentar, setAlimentar] = useState(false)

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

    const RAlimentar = () => {
        if (alimentar) {
            setAlimentar(false)
        } else {
            setAlimentar(true)
        }
    }

    return (
        <form>
            <label>
                <p>Nome</p>
                <input type='text' placeholder='Nome do aluno' />
            </label>
            <label>
                <p>Responsável pelo aluno</p>
                <input type='text' placeholder='Responsável pelo aluno' />
            </label>
            <label>
                <p>Número do telefone</p>
                <Telefone />
            </label>
            <label>
                <p>Data</p>
                <Data desc="Informe a data" />
            </label>
            <label>
                <input type='checkbox' onClick={RAlimentar} /> Possui restrição alimentar?
            </label>
            {alimentar &&
                <label>
                    <p>Descrição da restrição alimentar</p>
                    <input type='text' placeholder='Descreva a restrição.'/>
                </label>
            }
            <label>
                <input type='checkbox' /> Autorização de fotos e vídeos da criança para uso escolar
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
                <p>Observações adicionais</p>
                <textarea placeholder="Observações adicionais" />
            </label>
        </form>
    );
};

export default Form;