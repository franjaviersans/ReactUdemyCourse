import React from "react";

import classes from "./Spinner.css";

const spinner: React.FunctionComponent = () => <div className={classes.Loader}>{"Loading..."}</div>;

export default spinner;
