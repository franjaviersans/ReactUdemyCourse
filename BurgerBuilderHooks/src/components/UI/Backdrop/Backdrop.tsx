import React from "react";

import classes from "./Backdrop.css";

type backdropProps = {
	show: boolean,
	clicked: () => void
};

const backdrop: React.FunctionComponent<backdropProps> = (props) => (
	(props.show) ? <div className={classes.Backdrop} onClick={props.clicked}/> : null
);



export default backdrop;