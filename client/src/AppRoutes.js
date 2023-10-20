import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AppRoute = ({component: Component, can = () => true, redirect, ...rest}) => (
    <Route {...rest} render = {(props) => (
        can() ? <Component {...props} /> : <Navigate to={redirect} />
    )} />
);

export default AppRoute;