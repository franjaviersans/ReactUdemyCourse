import React, { useEffect, Suspense, useCallback } from 'react';
import { Route, Switch, withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import { StoreStateType } from './store/reducers/StateType';


const Checkout = React.lazy( () => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy( () => {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy( () => {
  return import('./containers/Auth/Auth');
});

const app: React.FunctionComponent = () => {

  const dispatch = useDispatch();

	const onTryAutoSignup = useCallback(() => dispatch(actions.authCheckState()), []);

	const isAuth = useSelector<StoreStateType, boolean>(state => state.auth.token !== null);

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);    
    
  let routes = (
    <Switch>
      <Route path="/auth" render={() => <Auth />} /> 
      <Route path="/" exact component={BurgerBuilder} /> 
      <Redirect to="/" />
    </Switch>
  );

  if(isAuth){
    routes= (
      <Switch>
        <Route path="/checkout" render={(props: RouteComponentProps) => <Checkout {...props}/>} /> 
        <Route path="/orders" render={(props: RouteComponentProps) => <Orders {...props}/>} /> 
        <Route path="/logout" component={Logout} /> 
        <Route path="/auth" render={() => <Auth/>} /> 
        <Route path="/" exact component={BurgerBuilder} /> 
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <div >
      <Layout>
          <Suspense fallback={<p>{"Loading..."}</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(app);
