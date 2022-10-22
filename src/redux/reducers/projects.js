import{
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL,

    GET_DATAFRAME_SUCCESS,
    GET_DATAFRAME_FAIL,
    GET_DATAFRAME_DESCRIBE_SUCCESS,
    GET_DATAFRAME_DESCRIBE_FAIL,

/*     GET_PROJECT_LIST_CATEGORIES_SUCCESS,
    GET_PROJECT_LIST_CATEGORIES_FAIL,

    GET_PROJECT_PAGINATION_RESULTS_SUCCESS,
    GET_PROJECT_PAGINATION_RESULTS_FAIL,
*/
    GET_SEARCH_PROJECT_SUCCESS,
    GET_SEARCH_PROJECT_FAIL,  
} from '../actions/types';

const initialState = {
    projects_list: null,

   /*  projects_list_category: null, */

   /*  filtered_posts: null, */

    project: null,
    count: null,
    next: null,
    previous: null, 
    
    df_head: null,
    df_corpus: null,
    len:null,
    df_describe: null,

    filtered_projects: null,

}




export default function projects(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        

// Proyectos enlistados
        case GET_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                projects_list: payload.results.projects,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_PROJECT_LIST_FAIL:
            return {
                ...state,
                projects_list: null,
                count: null,
                next: null,
                previous: null,
            }



// Detalle del Proyecto
            case GET_PROJECT_SUCCESS:
                return {
                    ...state,
                    project: payload.project
                }
            case GET_PROJECT_FAIL:
                return {
                    ...state,
                    project: null



                }
// Detalle del Dataframe
            case GET_DATAFRAME_SUCCESS:
                return {
                    ...state,
                    df_head: payload.df_head,
                    df_corpus: payload.df_corpus,
                    len: payload.len

                }
            case GET_DATAFRAME_FAIL:
                return {
                    ...state,
                    df_head: null,
                    df_corpus: null,
                    len: null
                }
// Descripcion del dataframe
            case GET_DATAFRAME_DESCRIBE_SUCCESS:
                return {
                    ...state,
                    df_describe: payload.df_describe

                }
            case GET_DATAFRAME_DESCRIBE_FAIL:
                return {
                    ...state,
                    df_describe: null,
                }
// Search Projects
                case GET_SEARCH_PROJECT_SUCCESS:
                    return {
                        ...state,
                        filtered_projects: payload.filtered_projects
                    }
                case GET_SEARCH_PROJECT_FAIL:
                    return {
                        ...state,
                        filtered_projects: null
                    }


        default:
            return state
    }
}