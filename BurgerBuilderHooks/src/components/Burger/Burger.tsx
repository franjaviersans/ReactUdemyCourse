import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { IIngredient, IngredientTypes } from '../../Types/Types';

type burgerProps = {
	ingredients: IIngredient;
}


const burger: React.FunctionComponent<burgerProps> = (props) => {
	//transform the ingredients' object into an array of BurgerIngredients
	let transformedIngredients : JSX.Element[] = Object.keys(props.ingredients)
		.map( igKey => {
			return [...Array(props.ingredients[igKey as IngredientTypes])].map( (_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el)
		}, []);

	if(transformedIngredients.length === 0){
		transformedIngredients = [<p key={0}> {"Please start adding ingredients!"} </p>]
	}

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