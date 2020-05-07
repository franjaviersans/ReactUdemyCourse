import React, { useState } from 'react';
import { connect } from 'react-redux';


import Aux from '../../hoc/AuxHOC/AuxHOC';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const layout = props => {
	const [showSideDrawer, toggleSideDrawer] = useState(false);

	const sideDrawerClosedHandler = () => {
		toggleSideDrawer(false);
	}

	const sideDrawerToggleHandler = () => {
		toggleSideDrawer(!showSideDrawer);
	}

	return(
		<Aux>
			<Toolbar 
				isAuth={props.isAuthenticated}
				clicked={sideDrawerToggleHandler}/>
			<SideDrawer 
				isAuth={props.isAuthenticated}
				open={showSideDrawer}
				closed={sideDrawerClosedHandler}/>
			<main className={classes.Content} >
				{props.children}
			</main>
		</Aux>
	);
};


const mapStatetoProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
	};
}

export default connect(mapStatetoProps)(layout);

