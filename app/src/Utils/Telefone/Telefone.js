import React, { Fragment } from 'react';

const Telefone = ({ name, dados, alterarDados, value }) => {

    const ValidarTell = (e) => {
        const { name, value } = e.target;

        if (value.length < 17) {
            if (value.length === 2) {
                alterarDados({ ...dados, [name]: `(${value}) ` });
            } else if (value.length === 6) {
                alterarDados({ ...dados, [name]: `${value} ` });
            } else if (value.length === 11) {
                alterarDados({ ...dados, [name]: `${value}-` });
            } else {
                alterarDados({ ...dados, [name]: value });
            };
        }
    };

    const Teclas = (e) => {
        const { name } = e.target;
        if (e.keyCode === 8) {  alterarDados({ ...dados, [name]: "" }); };
    }

    return (
        <Fragment>
            <input className='input__Form' type="text" placeholder="Ex. 99999999" value={value} onKeyDown={Teclas} name={name} onChange={ValidarTell} />
        </Fragment>
    );
};

export default Telefone;