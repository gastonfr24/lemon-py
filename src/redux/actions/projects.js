import axios from 'axios';
import{
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL,

    GET_DATAFRAME_SUCCESS,
    GET_DATAFRAME_FAIL,
    GET_DATAFRAME_DESCRIBE_SUCCESS,
    GET_DATAFRAME_DESCRIBE_FAIL,

/*      GET_PROJECT_LIST_CATEGORIES_SUCCESS,
    GET_PROJECT_LIST_CATEGORIES_FAIL,

    GET_PROJECT_PAGINATION_RESULTS_SUCCESS,
    GET_PROJECT_PAGINATION_RESULTS_FAIL, */

    GET_SEARCH_PROJECT_SUCCESS,
    GET_SEARCH_PROJECT_FAIL,  
} from './types'

export const get_projects_list = () => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/`, config);
        
        if (res.status === 200) {
            dispatch({
                type: GET_PROJECT_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PROJECT_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_PROJECT_LIST_FAIL
        });
    }
}


export const get_project_list_page = (p) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/?p=${p}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PROJECT_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PROJECT_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_PROJECT_LIST_FAIL
        });
    }
}


export const get_project = (slug) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PROJECT_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PROJECT_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PROJECT_FAIL
        });
    }
};


export const describe_df = (slug) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/df/describe/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_DATAFRAME_DESCRIBE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_DATAFRAME_DESCRIBE_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_DATAFRAME_DESCRIBE_FAIL
        });
    }
};


export const get_df = (slug) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/df/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_DATAFRAME_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_DATAFRAME_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_DATAFRAME_FAIL
        });
    }
};


export const search_project = (search_term) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/search/${search_term}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_PROJECT_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_PROJECT_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_PROJECT_FAIL
        });
    }
};