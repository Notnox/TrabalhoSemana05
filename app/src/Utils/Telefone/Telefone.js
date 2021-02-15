import React, { Fragment, useEffect, useState } from 'react';

const Telefone = () => {

    const [tell, setTell] = useState('');
    const [mascTell, setMascTell] = useState('');

    const ValidarTell = (e) => {
        if (tell.length < 16) {
            setTell(e.target.value)
        };
    };

    useEffect(() => {
        if (tell.length === 2) {
            setMascTell(`(${tell}) `)
        } else if (tell.length === 6) {
            setMascTell(`${tell} `)
        } else if (tell.length === 11) {
            setMascTell(`${tell}-`)
        } else {
            setMascTell(tell)
        };
    }, [tell])

    return (
        <Fragment>
            <input type="text" placeholder="Ex. 99999999" onChange={ValidarTell} value={mascTell} />
        </Fragment>
    );
};

export default Telefone;