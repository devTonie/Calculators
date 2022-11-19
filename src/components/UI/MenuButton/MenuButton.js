import React from 'react';

import classes from './MenuButton.module.css';

const MenuButton = props =>{
    return <button className={classes.button} onClick={props.onClick}>
        <i className={classes.icon}>{props.icon}</i>
        <span className={classes.text}>{props.children}</span>
    </button>
}

export default MenuButton;