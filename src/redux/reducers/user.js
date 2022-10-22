import {
    CREATE_USER_SUCCESS,
CREATE_USER_FAIL,
GET_USER_DETAILS_SUCCESS,
GET_USER_DETAILS_FAIL,
GET_MY_USER_DETAILS_SUCCESS,
GET_MY_USER_DETAILS_FAIL
} from '../actions/types'


const initialState = {
    user: null,
    my_user: null,
}

export default function user(state = initialState, action){
    const {type, payload} = action;
    switch(type){
       
       // casos en la creación del usuario
        case CREATE_USER_SUCCESS:
        case CREATE_USER_FAIL:
       
       
        // casos en el detalle del usuario
        case GET_USER_DETAILS_SUCCESS:
            return{
                ...state,
                user: payload.user
            }
        case GET_USER_DETAILS_FAIL:
            return {
                ...state,
                user: null,
            }

        // casos en el detalle del usuario web3
        case GET_MY_USER_DETAILS_SUCCESS:
            return{
                ...state,
                my_user: payload.user
            }
        case GET_MY_USER_DETAILS_FAIL:
             return {
                ...state,
                my_user: null, 
           }
        
        default:
            return state;
    }
}