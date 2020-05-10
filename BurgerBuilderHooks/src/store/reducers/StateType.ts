import { AuthStoreState } from "./auth";
import { BurgerStoreState } from "./burgerBuilder";
import { OrderStoreState } from "./order";

export interface StoreStateType {
    auth: AuthStoreState;
    burgerBuilder: BurgerStoreState;
    order: OrderStoreState;
};