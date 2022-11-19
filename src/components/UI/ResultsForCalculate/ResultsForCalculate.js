import React from "react";

import classes from "./ResultsForCalculate.module.css";

const ResultsForCalculate = (props) => {
  return (
    <div className={classes.position}>
      <input className={classes.input} value={props.show} />
    </div>
  );
};

export default ResultsForCalculate;
