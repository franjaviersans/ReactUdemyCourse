import React from "react";

import classes from "./DrawerToggle.css";

type drawerToggleProps = {
	clicked: () => void;
};

const drawerToggle: React.FunctionComponent<drawerToggleProps> = (props) => (
	<div className={classes.DrawerToggle} onClick={props.clicked}>
		<div />
		<div />
		<div />
	</div>
);


export default drawerToggle;