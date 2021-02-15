import React, { Fragment, useEffect, useState } from 'react';

const Data = ({ desc }) => {

    const [num, setNum] = useState('');
    const [mascNum, setMascNum] = useState('');

    const ValidarNum = (e) => {
        if (num.length < 10) {
            setNum(e.target.value)
        };
    };

    const Teclas = (e) => {
        if (e.keyCode === 8) {setNum('')}
    }

    useEffect(() => {
        if (num.length === 2) {
            setMascNum(`${num}/`)
        } else if (num.length === 5) {
            setMascNum(`${num}/`)
        } else {
            setMascNum(num)
        };
    }, [num])

    return (
        <Fragment>
            <input type="text" placeholder={desc} onChange={ValidarNum} value={mascNum} onKeyDown={Teclas} />
        </Fragment>
    );
};

export default Data;