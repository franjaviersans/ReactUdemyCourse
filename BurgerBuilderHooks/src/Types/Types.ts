export interface IIngredient {
  bacon: number;
  cheese: number;
  meat: number;
  salad: number;
}

interface IValueDisplayValue {
  value: string;
  displayValue: string;
  options?: [{ value: string; displayValue: string }, { value: string; displayValue: string }];
}

export interface IElementConfig {
  type?: string;
  placeholder?: string;
  options?: IValueDisplayValue[];
}

export interface IRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isEmail?: boolean;
  isNumeric?: boolean;
}

export interface ISimpleControlForm {
  elementType: string;
  elementConfig: IElementConfig;
  value: string;
  valid: boolean;
}

export type IFormControl = {
  validation: IRules;
  touched: boolean;
  errorMessage: string;
} & ISimpleControlForm;

export interface IOrderFormData {
  name?: string;
  street?: string;
  zipCode?: string;
  country?: string;
  email?: string;
  deliveryMethod?: string;
}

export interface IOrder {
  id: string;
  ingredients: IIngredient;
  orderData: IOrderFormData;
  price: string;
  userId: string;
}

export type IErrorMessage = {
  message: string;
} | null;

export type IngredientTypes = keyof IIngredient;
