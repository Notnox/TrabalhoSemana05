import React, { Fragment } from 'react';

const Data = ({ desc, dados, alterarDados, name, value }) => {

    const ValidarNum = (e) => {
        const { name, value } = e.target;

        if (value.length < 11) {
            if (value.length === 2) {
                alterarDados({ ...dados, [name]: `${value}/` });
            } else if (value.length === 5) {
                alterarDados({ ...dados, [name]: `${value}/` });
            } else {
                alterarDados({ ...dados, [name]: value });
            };
        };
    };

    const Teclas = (e) => {
        const { name } = e.target;
        if (e.keyCode === 8) {  alterarDados({ ...dados, [name]: "" }); };
    }

    return (
        <Fragment>
            <input className='input__Form' type="text" placeholder={desc} onChange={ValidarNum} value={value} name={name} onKeyDown={Teclas} />
        </Fragment>
    );
};

export default Data;