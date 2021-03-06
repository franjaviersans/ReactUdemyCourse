import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

type navigationItemsProps = {
  isAuth: boolean;
};

const navigationItems: React.FunctionComponent<navigationItemsProps> = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact={true}>
      Burger Builder
    </NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/orders" exact={false}>
        Orders
      </NavigationItem>
    ) : null}
    {props.isAuth ? (
      <NavigationItem link="/logout" exact={false}>
        Logout
      </NavigationItem>
    ) : (
      <NavigationItem link="/auth" exact={false}>
        Authenticate
      </NavigationItem>
    )}
  </ul>
);

export default navigationItems;
