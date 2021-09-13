
import { types } from '../types/types';

// const state = {
//     name: 'Edmundo',
//     logger:true
// }


// Un recuder noees ams que una simple funcion pura
// Se le debe paras un objeto action con {type, payload}
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}