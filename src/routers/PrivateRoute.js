import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


//este no es mas que otro funcitonal component corriente, pero Este va a tener un comportamiento especial 
// El componente se declara con C mayuscula, para diferenciarlo 
// Todo sol demas el exact el path , se pasa mediante el ...rest 
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component= { (props) => (
                (isAuthenticated)
                 ? (<Component {...props}/>)
                 : (<Redirect to='login'/>)
            )}
        />
    )
}
// Esto me va ayudar a utilizar mi priverRoute de manera correcta
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}