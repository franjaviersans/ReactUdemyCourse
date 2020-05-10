import React from 'react';

import Aux from '../../../hoc/AuxHOC/AuxHOC'
import Button, {ButtonType} from '../../UI/Button/Button';
import { IIngredient, IngredientTypes } from '../../../Types/Types';

type orderSummaryProps = {
	ingredients: IIngredient;
	price: number;
	purchaseCancelled: () => void;
	purchaseContinued: () => void;
}

const orderSummary: React.FunctionComponent<orderSummaryProps> = (props) => {
	
	const ing: JSX.Element[] = Object.keys(props.ingredients).map((igKey: string) => 
					<li key={igKey}>
						<span style={{textTransform: 'capitalize'}}>
						{ igKey}
						</span>
						{`:  ${props.ingredients[igKey as IngredientTypes]}`}
					</li>);

	return (
		<Aux>
			<h3>{"Your Order"}</h3>
			<p>{"A delicious burger with the following ingredients:"}</p>
			<ul>
				{ing}
			</ul>
			<p><strong>{`Total Price: ${props.price.toFixed(2)}`}</strong></p>
			<p>{"Continue to Checkout?"}</p>
			<Button disabled={false} btnType={ButtonType.Danger} clicked={props.purchaseCancelled}>{"CANCEL"}</Button>
			<Button disabled={false} btnType={ButtonType.Success} clicked={props.purchaseContinued}>{"CONTINUE"}</Button>
		</Aux>
	);
};

export default orderSummary;