import React from 'react';
import Lista from '../Lista/Lista';

const Section = ({ titulo, tabela }) => {
    return (
        <section>
            <form>
                <h2>{titulo}</h2>
            </form>
            {tabela && 
                <Lista />
            }
        </section>
    )
};

export default Section;