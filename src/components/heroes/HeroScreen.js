import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
    // Hay un hook llamado useParams
    const { heroId } = useParams();

    const hero = getHeroById(heroId);

    // Si es undefined o no existe hacemos un redirect
    if(!hero) {
        return <Redirect to="/"/>
    }

    const handleReturn = () =>{
        // En caso de que se abra en una ruta que no tenia precedencia, podemos monitorear 
        // los history con el lenght, si es mmenos de 2 da un error.
        // entojnces hacemos que vaya a la pantalla pruincipal.
        if(history.length <= 2) {
            history.push('/')
        }else {
            history.goBack(); 
        }
        
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    console.log(hero);
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroId}.jpg`} 
                    className='img-thumbnail'
                    alt={superhero} 
                    />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ol className="list-group-flush">
                    <li className="list-group-item"><strong>Alter Ego: {alter_ego}</strong></li>
                    <li className="list-group-item"><strong>Publisher: {publisher}</strong></li>
                    <li className="list-group-item"><strong>First Appearance: {first_appearance}</strong></li>
                </ol>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                    >
                    Return
                </button>
            </div>
        </div>
    )
}
