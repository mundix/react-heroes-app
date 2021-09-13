import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    // Si es undefined, voy a poner un string vacio para que no de error. 
    const { q = '' } = queryString.parse(location.search);

    // Para poder trabajar con el query String, se recomienda un paquete
    // https://www.npmjs.com/package/query-string

    const [formValues, handleInputChange] = useForm({
        // query: '',
        // Voy asignar el query 'q' a mi valor iniciarl del formulario
        query: q,
    });

    const { query } = formValues;

    //Memorizamos la busqueda, solo cambia cuando el query de la url 'q' cambie,
    // si lo pongo con el input query , se generan consoles o eventos. 
    //Se envia un call back () => functionName() with arg if it have. 
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    // const heroesFiltered = getHeroesByName(query);


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
                            value={query}
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
                        (q === '') 
                            &&
                                <div className="alert alert-info">
                                    Search a hero
                                </div>

                    }
                    {
                        (q !== '' && heroesFiltered.length === 0) 
                            &&
                                <div className="alert alert-danger">
                                    There is no a hero with {q}
                                </div>

                    }
                    {
                        // Ho puedes usar  { }  en las funciones de array ex map( obj => (...))
                        (q !== '' && heroesFiltered.length > 0) &&
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
