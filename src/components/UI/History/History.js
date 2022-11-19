import React from "react";

import classes from "./History.module.css";

const History = (props) => {
  const items = props.history.map((item) => {
    return (
      <>
        <p className={classes.item}>{item}</p>
        <hr className={classes.hr} />
      </>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.heads}>History</div>
      <div className={classes.wrapper}>{items}</div>
    </React.Fragment>
  );
};

export default History;
