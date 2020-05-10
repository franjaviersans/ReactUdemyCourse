import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import { IngredientTypes } from '../../../Types/Types';

export type Disabled = {
	[key in IngredientTypes]?: boolean;
}

type buildControlsProps = {
	price: number;
	purchasable: boolean;
	isAuth: boolean;
	ingredientAdded: (type: IngredientTypes) => void;
	ingredientRemove: (type: IngredientTypes) => void;
	ordered: () => void;
	disabled: Disabled
}

const controls: {label: string, type: IngredientTypes}[] = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'},
];

const buildControls: React.FunctionComponent<buildControlsProps> = (props) => {

	return(
	<div className={classes.BuildControls}>
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map( ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemove(ctrl.type)}
				disabled={props.disabled[ctrl.type as IngredientTypes] ?? false}
				/>
		))}
		<button 
			className={classes.OrderButton} 
			disabled={!props.purchasable}
			onClick={props.ordered}>
			{props.isAuth? 'ORDER NOW':'SIGN UP TO ORDER'}
		</button>
	</div>
	);
};


export default buildControls;