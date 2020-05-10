import React from "react";

import Burger from "../../Burger/Burger";
import Button, { ButtonType } from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";
import { IIngredient } from "../../../Types/Types";

type checkoutSummaryProps = {
	ingredients: IIngredient;
	checkoutCancelled: () => void;
	checkoutContinued: () => void;
};

const checkoutSummary: React.FunctionComponent<checkoutSummaryProps> = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1> We hope it tastes well!</h1>
			<div style={{width: "100%", margin: "auto"}}>
				<Burger ingredients={props.ingredients}/>
			</div>
			<Button 
				disabled={false}
				btnType={ButtonType.Danger}
				clicked={props.checkoutCancelled}
			>
				{"CANCEL"}
			</Button>
			<Button 
				disabled={false}
				btnType={ButtonType.Success}
				clicked={props.checkoutContinued}
			>
				{"CONTINUE"}
			</Button>
		</div>
	);
};

export default checkoutSummary;