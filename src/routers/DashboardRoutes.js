import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            {/* El NavBar no recibe el history por que o esta dentro del swithc, pero se puede pasar atraves de props */}
            {/* Pero no es lo conveniente */}
            {/* <Navbar history={history}/> */}
            {/* Usando React Route Dom se puede usar el useHistory */}
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    {/* Si algo no viene llame el redirect */}
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
