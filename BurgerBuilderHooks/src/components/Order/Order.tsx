import React from "react";

import classes from "./Order.css";
import { IIngredient, IngredientTypes } from "../../Types/Types";

type orderProps = {
	ingredients: IIngredient;
	price: string;
};


const order: React.FunctionComponent<orderProps> = (props) => {
	const ingredients = [];

	for (const ingredientName in props.ingredients) {
		if(!!ingredientName)
		{
			ingredients.push({
				name: ingredientName, 
				amount: props.ingredients[ingredientName as IngredientTypes]
			});
		}
	}

	const ingredientOutput = ingredients.map(ig => {
		return (
		<span 
			style={{
				textTransform: "capitalize", 
				display: "inline-block",
				margin: "0 8px",
				border: "1px solid #ccc",
				padding: "5px"
			}}
			key={ig.name}
		>
			{`${ig.name} (${ig.amount})`}
		</span>);
	});

	return (
		<div className={classes.Order}>
			<p>{"Ingredients: "}{ingredientOutput}</p>
			<p>{"Price: "}<strong>{`USD ${Number.parseFloat(props.price).toFixed(2)}`}</strong> </p>
		</div>
	);
};

export default order;