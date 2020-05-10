import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.css";

type navigationItemProps = {
	link: string;
	exact: boolean;
};

const navigationItem: React.FunctionComponent<navigationItemProps> = (props) => (
	<li className={classes.NavigationItem}>
		<NavLink 
			to={props.link}
			exact={props.exact}
			activeClassName={classes.active}
		>
			{props.children}
		</NavLink>
	</li>
);

export default navigationItem;