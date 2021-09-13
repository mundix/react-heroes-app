import React from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroList = ({publisher}) => {

    const heroes = getHeroByPublisher( publisher );
    return (
        <div className='card-columns'>
            {
                // El componete cambio no es un high order component, os ea que no cierra, si no
                // Que el se cierra a si mismo. , cambiamos el LI por el HeroCard  y le pasamos
                // Le pasamos todos los argumentos utilikzando el operadoer spread ... y el hero
                
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
