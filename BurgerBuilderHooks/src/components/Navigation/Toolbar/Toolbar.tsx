import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

type toolbarProps = {
	clicked: () => void;
	isAuth: boolean;
};

const toolbar: React.FunctionComponent<toolbarProps> =  (props) => (
	<header className={classes.Toolbar}>
		<DrawerToggle clicked={props.clicked}/>
		<div className={classes.Logo}>
			<Logo/>
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems isAuth={props.isAuth}/>
		</nav>
	</header>
);

export default toolbar;