import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const { dispatch } = useContext(AuthContext); //primero es incluir el useContext, 

    const handleLogin = () =>{
        // history.push('/'); 
        // Se cambio de lugar estaba ndespues del dispatch
        // history.replace('/');

        // Tarea, extraer del context, la function dispatch  y la function dispatch debe mandar a llmar un action que tenga este tipo, 
        // Enel objeto en el payload debe eviar el nombre 
        // al dispatch se le pasan dos argumentos el type y el payload, el payload siempre es un objeto { param: '', param2: '' }
        dispatch({
            type: types.login,
            payload: {
                name:'Edmundo'
            }
        });

        history.replace('/');

    }

    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr />

            <button 
                className='btn btn-primary'
                onClick={handleLogin}
                >
                login
            </button>
        </div>
    )
}
