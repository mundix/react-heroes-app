import React from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroesByPublisher';


export const HeroList = ({publisher}) => {

    const heroes = getHeroByPublisher( publisher );
    return (
        <div>
            {
                heroes.map( hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </div>
    )
}
