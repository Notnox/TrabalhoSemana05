import React, { Fragment } from 'react';
import axios from 'axios';

const Button = ({ item }) => {

    const onClickDelete = () => {
        const response = window.confirm(`Deseja excluir o cadastro do aluno ${item.nome}?`)

        if (response) {
            axios.delete(`http://localhost:5000/alunos/${item.id}?_embed=autorizados`)
                .then(() => {
                    window.location.reload();
                })
        }
    }

    return (
        <Fragment>
            <button onClick={onClickDelete}>excluir</button>
        </Fragment>
    );
};

export default Button;