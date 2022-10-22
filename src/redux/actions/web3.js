import {
    LOAD_ETHEREUM_BALANCE_SUCCESS,
    LOAD_ETHEREUM_BALANCE_FAIL,
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_NETWORK_SUCCESS,
    LOAD_NETWORK_FAIL,
/*     LOAD_GAS_SUCCESS,
    LOAD_GAS_FAIL, */
    SET_LOADING,
} from "./types";

import { ethers } from "ethers";
import { create_user, get_my_user_detail } from "./user";

// Crear cuenta con web3
export const loadweb3 =()=> async dispatch =>{
    if(window.ethereum){
        const accounts = await window.ethereum.request({
           // metodo para requerir cuenta del usuario
           method: "eth_requestAccounts",
        })
        // guardamos la cuenta en el local storage
        localStorage.setItem('account', accounts[0]);
    
        // Si se carga el usuario lo despachamos
        dispatch({
            type: LOAD_WEB3_SUCCESS,
            payload: accounts[0],
        })


        // cargamos el Ethereum Balance
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const balance = await provider.getBalance(accounts[0])
        const balanceInEth = ethers.utils.formatEther(balance)
    
        // Si se carga todo correctamente podemos despachar
        dispatch({
            type: LOAD_ETHEREUM_BALANCE_SUCCESS,
            payload: balanceInEth,
        })
        

    
    }else{
       dispatch({
        type: LOAD_WEB3_FAIL
       }) 
       dispatch({
        type: LOAD_ETHEREUM_BALANCE_FAIL
       }) 
    }
}

// Ingresar con cuenta web3 
export const loginweb3 =()=> async dispatch =>{
    dispatch({
        type: SET_LOADING,
        payload: true,
    })

    if(window.ethereum){
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        })

         // cargamos el Ethereum Balance
         const provider = new ethers.providers.Web3Provider(window.ethereum)
         const balance = await provider.getBalance(accounts[0])
         const balanceInEth = ethers.utils.formatEther(balance)
     
          // Si se carga todo correctamente podemos despachar
        dispatch({
            type: LOAD_ETHEREUM_BALANCE_SUCCESS,
            payload: balanceInEth,
        })
        
        // Aca vamos a crear un usuario de Django
        await dispatch(
            create_user()
        )
        await dispatch(
            get_my_user_detail()
            )

        await dispatch({
            type: SET_LOADING,
            payload: false,
        })

        // guardamos la cuenta en el local storage
        localStorage.setItem('account', accounts[0]);
    
        // Si se carga el usuario lo despachamos
        dispatch({
            type: LOAD_WEB3_SUCCESS,
            payload: accounts[0],
        })


    }else{
        dispatch({
         type: LOAD_WEB3_FAIL
        }) 
        await dispatch({
            type: SET_LOADING,
            payload: false,
        })
        dispatch({
            type: LOAD_ETHEREUM_BALANCE_FAIL
           }) 
     }

}

// Ver en que network estamos conectados
export const get_network_id = () => async dispatch =>{
    if(window.ethereum){
        const netId = await window.ethereum.request({
            method:'eth_chainId'
        })
        const networkID = parseInt(netId);

        dispatch({
            type: LOAD_NETWORK_SUCCESS,
            payload: networkID,
        })

    }else{
        
        dispatch({
          type: LOAD_NETWORK_FAIL,
          payload: false,  
        })
    }
}