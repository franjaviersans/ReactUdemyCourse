import React from "react";

import classes from "./BuildControl.css";

type buildControlProps = {
  label: string;
  disabled: boolean;
  removed: () => void;
  added: () => void;
};

const buildControl: React.FunctionComponent<buildControlProps> = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>
        {"Less"}
      </button>
      <button className={classes.More} onClick={props.added}>
        {"Add"}
      </button>
    </div>
  );
};

export default buildControl;
