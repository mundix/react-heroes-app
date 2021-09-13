import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    {/* Si algo no viene llame el redirect */}
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
