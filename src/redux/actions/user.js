import {
    CREATE_USER_SUCCESS,
CREATE_USER_FAIL,
SET_LOADING,
GET_USER_DETAILS_SUCCESS,
GET_USER_DETAILS_FAIL,
GET_MY_USER_DETAILS_SUCCESS,
GET_MY_USER_DETAILS_FAIL
} from './types'

import axios from 'axios'

// Funcion para crear usuario POST
export const create_user = () => async dispatch  =>{
    if(window.ethereum){

    // tomamos la cuenta de web3 del usuario
    const accounts = await window.ethereum.request({
        method:'eth_requestAccounts',
    })

    const account = accounts[0]

    // conf para post con axios
    const config = {
        headers:{
            'Content-Type': 'application/json',
        },
    }

    // creacion del Json para axios
    const body = JSON.stringify({
        account,
    })

    // tratamos de hacer el envío de la creacion de usuario
    try{
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/user/create`,
            body,
            config
        )

         // Respuesta de Django
         //if(res.status === 201){
        if(res.status === 200){
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: CREATE_USER_FAIL,
            })
            await dispatch({
                type: SET_LOADING,
                payload: false
            })
        }

    }catch(err){
        dispatch({
            type: CREATE_USER_FAIL,
        })
    }




}}

// Funcion para leer datos del usuario GET
export const get_user_detail = (account) => async dispatch =>{

    //configuración para axios
    const config ={
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    
    const formData = new FormData()
    formData.append('account', account)

    // hacemos el GET
    try{
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/user/profile/${account}`,
            formData,
            config


        )
        if(res.status === 200){
            dispatch({
                type: GET_USER_DETAILS_SUCCESS,
                payload: res.data
            })
        }
    }catch{
        dispatch({
            type:GET_USER_DETAILS_FAIL
        })
    }

}

// Funcion para leer datos del usuario GET web3
export const get_my_user_detail = () => async dispatch =>{

    if(window.ethereum){

    // tomamos la cuenta de web3 del usuario
    const accounts = await window.ethereum.request({
        method:'eth_requestAccounts',
    })

    const account = accounts[0]


         //configuración para axios
    const config ={
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    
    const formData = new FormData()
    formData.append('account', account)

    // hacemos el GET
    try{
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/user/profile/${account}`,
            formData,
            config


        )
        if(res.status === 200){
            dispatch({
                type: GET_MY_USER_DETAILS_SUCCESS,
                payload: res.data
            })
        }
    }catch{
        dispatch({
            type:GET_MY_USER_DETAILS_FAIL
        })
    }
    }
}

