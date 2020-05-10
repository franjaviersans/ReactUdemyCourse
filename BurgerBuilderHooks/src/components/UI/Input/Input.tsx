import React from "react";

import classes from "./Input.css";
import { IElementConfig } from "../../../Types/Types";

type inputProps = {
	invalid: boolean,
	shouldValidate: boolean,
	touched: boolean,
	errorMessage: string,
	elementType: string,
	elementConfig: IElementConfig;
	value: string | number | string[];
	label?: string;
	changed: (e: React.ChangeEvent) => void;
};

const input: React.FunctionComponent<inputProps> = (props) => {
	
	let validationError = null;
	let inputElement = null;
	const inputClasses = [classes.InputElement];

	if(props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
		validationError = (<p className={classes.ValidationError}>{props.errorMessage}</p>);
	}
	
	const inputClassesString = inputClasses.join(" ");

	switch(props.elementType){
		case("input"):
			inputElement = 
			<input 
				className={inputClassesString} 
				{...props.elementConfig} 
				value={props.value}
				onChange={props.changed}
			/>;
			break;
		case("textarea"):
			inputElement = 
			<textarea 
				className={inputClassesString} 
				{...props.elementConfig} 
				value={props.value}
				onChange={props.changed}
			/>;
			break;
		case("select"):
			inputElement = 
			(<select 
				className={inputClassesString} 
				value={props.value}
				onChange={props.changed}
			>
				{!!props.elementConfig.options && props.elementConfig.options.map( option => (
					<option key={option.value} value={option.value}>
						{option.displayValue}
					</option>
				))}
			</select>);
			break;
		default:
			inputElement = 
			<input 
				className={inputClassesString} 
				{...props.elementConfig} 
				value={props.value}
			/>;
			break;
	}
	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
			{validationError}
		</div>
	);
};


export default input;