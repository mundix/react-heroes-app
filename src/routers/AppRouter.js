import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar } from '../componentes/ui/NavBar';
import { LoginScreen } from '../componentes/login/LoginScreen';
import { Marvel } from '../componentes/marvel/Marvel';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Navbar />

                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={Marvel} />
                </Switch>
            </div>
        </Router>
    )
}
