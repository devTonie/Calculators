import React from 'react';

import classes from './ButtonConverter.module.css';

const ButtonConverter = props =>{
  return <button className={classes.button} onClick={props.onClick}>
    Calculate
  </button>
}

export default ButtonConverter;