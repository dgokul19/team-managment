import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routesList } from './routeSetup';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routesList.map(route => <Route key={route.name}
                    exact path={route.path}
                    redirect={route.redirect}
                    render={(routeProps) => route.renderComponent(routeProps)} />)}
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;