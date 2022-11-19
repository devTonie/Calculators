import React from 'react';

import classes from './StandardKeyboard.module.css';

const Keyboard = props =>{
    const clickHandler = event =>{
        props.onClick(event.target.innerText);
    }

    return <div className={[`${classes.keyboard} ${props.className}`]}>
        <button className={classes['clear-all']} value='AC' onClick={clickHandler}>AC</button>
        <button className={classes.squares} value='()' onClick={clickHandler}>()</button>
        <button className={classes.percent} value='%' onClick={clickHandler}>%</button>
        <button className={classes.decide} value='/' onClick={clickHandler}>/</button>
        <button className={classes.key} value='7' onClick={clickHandler}>7</button>
        <button className={classes.key} value='8' onClick={clickHandler}>8</button>
        <button className={classes.key} value='9' onClick={clickHandler}>9</button>
        <button className={classes.multiply} value='*' onClick={clickHandler}>*</button>
        <button className={classes.key} value='4' onClick={clickHandler}>4</button>
        <button className={classes.key} value='5' onClick={clickHandler}>5</button>
        <button className={classes.key} value='6' onClick={clickHandler}>6</button>
        <button className={classes.minus} value='-' onClick={clickHandler}>-</button>
        <button className={classes.key} value='1' onClick={clickHandler}>1</button>
        <button className={classes.key} value='2' onClick={clickHandler}>2</button>
        <button className={classes.key} value='3' onClick={clickHandler}>3</button>
        <button className={classes.plus} value='+' onClick={clickHandler}>+</button>
        <button className={classes.key} value='0' onClick={clickHandler}>0</button>
        <button className={classes.key} value='.' onClick={clickHandler}>.</button>
        <button className={classes.key} value='Del' onClick={clickHandler}>Del</button>
        <button className={classes.equals} value='=' onClick={clickHandler}>=</button>
    </div>
}

export default Keyboard;