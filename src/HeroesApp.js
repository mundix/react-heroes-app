import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter';
import {AuthContext} from './auth/AuthContext';
import {authReducer} from './auth/authReducer';

export const HeroesApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || {
            logged: false
        };
    }

    const [user, dispatch] = useReducer(authReducer, {}, init)
    // Se agego para guardar en el local storage e user
    useEffect(() => {
        //si los todos cambian tengo que volver a grabar en el localStorage
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter/>
        </AuthContext.Provider>
        
    )
}
