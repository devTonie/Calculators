import React from "react";

import image from '../../../../media/swaps.png';
import classes from "./FlipButton.module.css";

const FlipButton = (props) => {
  const onFlipHandler = () => {
    props.flipHandler();
  };

  return (
      <img className={classes.button} src={image} alt='Swap image' onClick={onFlipHandler}/>
      
  );
};

export default FlipButton;
