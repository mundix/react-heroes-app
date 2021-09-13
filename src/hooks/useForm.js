import { useState } from "react"

/**
 * Que hace este useForm , se le pasa las proiedades que pueden ser campo de texto que puedo manipular
 *  y el handlgInputChange para leerlo rapidamente 
 *  */ 
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // De esta manera se reinicia el formulario 
    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
             ...values,
             [target.name] : target.value
         });
    }
    //Devolvere un arraay con los valores de setValue, y el metodo 
    return [values, handleInputChange, reset];
}