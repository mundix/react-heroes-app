import React from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const { q } = queryString.parse(location.search);

    // Para poder trabajar con el query String, se recomienda un paquete
    // https://www.npmjs.com/package/query-string


    const [formValues, handleInputChange] = useForm({
        // query: '',
        // Voy asignar el query 'q' a mi valor iniciarl del formulario
        query: q,
    });

    const {query} = formValues;

    const heroesFiltered = heroes;


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${query}`);
        console.log(formValues);
    };
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Find your hero" 
                            name='query'
                            value={ query }
                            autoComplete='off'
                            onChange={handleInputChange}
                            />
                        <button 
                            type='submit'
                            className="btn m-1 btn-block btn-outline-primary"
                            >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    {/* Colocare los resultados de un arreglo aque aun no esta diposnible */}
                    <h4>Results</h4>
                    {
                        // Ho puedes usar  { }  en las funciones de array ex map( obj => (...))
                        heroesFiltered.map(hero => (
                            
                            <HeroCard className='col-2 mt-5'
                                key={hero.id}
                                {...hero} 
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
