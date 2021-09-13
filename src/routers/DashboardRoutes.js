import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScree } from '../components/heroes/HeroScree';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScree} />
                    <Route exact path="/dc" component={DcScreen} />
                    {/* Si algo no viene llame el redirect */}
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
