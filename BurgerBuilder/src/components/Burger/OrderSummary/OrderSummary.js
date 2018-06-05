import React from 'react';

import Aux from '../../../hoc/AuxHOC'


const orderSummary = (props) => {
	
	const ing = Object.keys(props.ingredients)
				.map ( (igKey) =>
					(<li key={igKey}>
						<span style={{textTrabsform: 'capitalize'}}>
						{igKey}
						</span>
						: {props.ingredients[igKey]}
					</li>)

				);

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ing}
			</ul>
			<p>Continue to Checkout?</p>
		</Aux>
	);
};

export default orderSummary;