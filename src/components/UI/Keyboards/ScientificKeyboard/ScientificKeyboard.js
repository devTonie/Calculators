import React from "react";

import StandardKeyboard from "../StandardKeyboard/StandardKeyboard";
import classes from "./ScientificKeyboard.module.css";

const ScientificKeyboard = (props) => {
  const clickHandler = (event) => {
    props.onClick(event.target.innerText);
  };

  const standardClickHandler = (value) =>{
    props.onClick(value);
  }

  return (
    <div className={classes.position}>
      <div className={[`${classes.keyboard} ${props.className}`]}>
        <button className={classes.key} value="Rad" onClick={clickHandler}>
          Rad
        </button>
        <button className={classes.key} value="Deg" onClick={clickHandler}>
          Deg
        </button>
        <button className={classes.key} value="x!" onClick={clickHandler}>
          x!
        </button>
        <button className={classes.key} value="Inv" onClick={clickHandler}>
          Inv
        </button>
        <button className={classes.key} value="sin" onClick={clickHandler}>
          sin
        </button>
        <button className={classes.key} value="ln" onClick={clickHandler}>
          ln
        </button>
        <button className={classes.key} value="тт" onClick={clickHandler}>
          тт
        </button>
        <button className={classes.key} value="cos" onClick={clickHandler}>
          cos
        </button>
        <button className={classes.key} value="log" onClick={clickHandler}>
          log
        </button>
        <button className={classes.key} value="e" onClick={clickHandler}>
          e
        </button>
        <button className={classes.key} value="tan" onClick={clickHandler}>
          tan
        </button>
        <button className={classes.key} value="√" onClick={clickHandler}>
            √
        </button>
        <button className={classes.key} value="Ans" onClick={clickHandler}>
          Ans
        </button>
        <button className={classes.key} value="EXP" onClick={clickHandler}>
          EXP
        </button>
        <button className={classes.key} value="xy" onClick={clickHandler}>
          xy
        </button>
      </div>
      <StandardKeyboard className={classes.grid} onClick={standardClickHandler}/>
    </div>
  );
};

export default ScientificKeyboard;
