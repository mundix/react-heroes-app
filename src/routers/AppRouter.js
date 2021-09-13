import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* El NavBar ya no hace falta */}
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    {/* Se removio el exact para que funcione como por defecto.  */}
                    <Route  path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
