import React from 'react';

import classes from './ConverterInput.module.css';

const Inputs = props => {

  const changeAmountHandler = event => {
    props.onChangeAmount(event.target.value);
  }

  const onChangeProperty = event =>{
    props.onChangeProperty(event.target.value);
  }

  return <div className={`${classes.position} ${props.className}`}>
    <label className={classes.label} htmlFor={props.id}>{props.label}</label>
    <input className={`${classes.input} ${props.inputStyle}`} type='number' id={props.id} value={props.amount} onChange={changeAmountHandler} placeholder={props.placeholder}/>
    <select className={`${classes.select} ${props.selectStyle}`} onChange={onChangeProperty}>
      {props.values.map((item, id) =>
        <option key={id} value={item}>{item}</option>
      )}
    </select>
  </div>
}

export default Inputs;