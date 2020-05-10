import { IRules } from "../Types/Types";

export const updateObject = <T>(oldObject : T, updatedProperties : Partial<T>) => {
	return {
		...oldObject,
		...updatedProperties,
	};
};

export const checkValidity = (value : string, rules?: IRules)  => {
		//function to check fields of the form
		let isValid = true;

		if(!rules) return isValid;

		if(rules.required) {
			isValid = value.trim() !== "" && isValid;
		}

		if(rules.minLength) {
			isValid = value.length >= rules.minLength  && isValid;
		}

		if(rules.maxLength) {
			isValid = value.length <= rules.maxLength  && isValid;
		}

		if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

		return isValid;
	};