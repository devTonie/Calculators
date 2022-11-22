import React from "react";

import classes from "./ConverterInput.module.css";

const Inputs = (props) => {

  const onChangeProperty = (event) => {
    props.onChangeProperty(event.target.value);
  };

  return (
    <div className={`${classes.position} ${props.className}`}>
      <input
        className={`${classes.input} ${props.inputStyle}`}
        name={props.name}
        disabled={props.disabled}
        type="number"
        id={props.id}
        value={props.amount}
        onChange={props.onChangeAmount}
      />
      <select
        className={`${classes.select} ${props.selectStyle}`}
        onChange={onChangeProperty}
        defaultValue={props.defaultProperty}
        value={props.value}
      >
        {props.values.map((item, id) => (
          <option key={id} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Inputs;
