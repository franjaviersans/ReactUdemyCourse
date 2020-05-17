import React from "react";

import classes from "./Button.css";

export enum ButtonType {
  Success = 0,
  Danger = 1,
}

type buttonProps = {
  disabled?: boolean;
  btnType: ButtonType;
  clicked?: () => void;
};

const button: React.FunctionComponent<buttonProps> = (props) => {
  let cssClass: string = "";

  switch (props.btnType) {
    case ButtonType.Danger:
      cssClass = classes.Danger;
      break;
    case ButtonType.Success:
      cssClass = classes.Success;
      break;
  }

  return (
    <button disabled={props.disabled} className={[classes.Button, cssClass].join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
