import {types} from '../types'
// me triago la type
export const authReducer = (state = {}, action) => {
// segun el tipo de accion yo voy a modificar el estado!!

    switch (action.type) {
        // si el case es types es login?
        case types.login:

            return {
                // recupero toda la informacion del payload
                // y piso la propiedad loguado si estaba en false lo paso a true
                ...action.payload, 
                logueado : true
               
            };
        case types.logout:

            return {
                ...action.payload,
                logueado : false
            }
        default:
            return state
    }

}
