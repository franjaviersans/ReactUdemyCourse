import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
	//transform the engredients into an array of BurgerIngredients
	const transformedIngredients = Object.keys(props.ingredients)
		.map( igKey => {
			return [...Array(props.ingredients[igKey])].map( (_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
		});

	//always draw top and bottom
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default burger;