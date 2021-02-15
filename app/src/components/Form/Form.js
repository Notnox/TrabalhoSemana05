import React, { useEffect, useState } from 'react';
import Data from '../../Utils/Data/Data';
import Telefone from '../../Utils/Telefone/Telefone';

const Form = () => {
    return (
        <form>
            <label>
                <p>Número do telefone</p>
                <Telefone />
            </label>
            <label>
                <p>Número do telefone</p>
                <Data desc="Informe a data" />
            </label>
        </form>
    );
};

export default Form;