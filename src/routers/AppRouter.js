import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';


export const AppRouter = () => {

    const {user} = useContext(AuthContext); //Se extrae del reducer el user { name, logged } , para enviarlo atravess del PrivateRoute

    return (
        <Router>
            <div>
                {/* El NavBar ya no hace falta */}
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    
                    {/* Se removio el exact para que funcione como por defecto.  */}
                    {/* Esta es la ruta que quiero proteger, lo cambio por el prive route */}
                    {/* <Route  path="/" component={ DashboardRoutes } /> */}
                    <PrivateRoute  
                        path="/" 
                        isAuthenticated={user.logged}
                        component={ DashboardRoutes } 
                        />
                </Switch>
            </div>
        </Router>
    )
}
