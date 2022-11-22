import React from 'react';

import classes from './InputsCard.module.css';

const InputsCard = props =>{
    return <div className={classes.wrapper}>
        {props.children}
    </div>
}

export default InputsCard;