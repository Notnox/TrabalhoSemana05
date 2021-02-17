import React, { Fragment } from 'react';

const Editar = ({ item, setEditar }) => {

    const onClickEditar = () => {
        setEditar(item.id)
    }

    return (
        <Fragment>
            <button onClick={onClickEditar}>Editar</button>
        </Fragment>
    );
};

export default Editar;