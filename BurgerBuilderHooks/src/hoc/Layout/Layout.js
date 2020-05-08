import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import Aux from '../../hoc/AuxHOC/AuxHOC';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const layout = props => {
	const [showSideDrawer, toggleSideDrawer] = useState(false);

	const isAuthenticated = useSelector(state => state.auth.token !== null);

	const sideDrawerClosedHandler = () => {
		toggleSideDrawer(false);
	}

	const sideDrawerToggleHandler = () => {
		toggleSideDrawer(!showSideDrawer);
	}

	return(
		<Aux>
			<Toolbar 
				isAuth={isAuthenticated}
				clicked={sideDrawerToggleHandler}/>
			<SideDrawer 
				isAuth={isAuthenticated}
				open={showSideDrawer}
				closed={sideDrawerClosedHandler}/>
			<main className={classes.Content} >
				{props.children}
			</main>
		</Aux>
	);
};

export default layout;

