import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo: React.FunctionComponent = () => (
  <div className={classes.Logo}>
    <img alt={"Application Logo"} src={burgerLogo} />
  </div>
);

export default logo;
