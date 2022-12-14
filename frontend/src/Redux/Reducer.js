import * as types from "./ActionTypes"
const InitialData = {
    Womens : [ ],
    Mens : [ ],
    isLoading : false,
    isError : false
}

export default function Reducer (state=InitialData, action) {
    const {payload,type} = action;

    switch(type){

        case types.GET_WOMENS_DATA_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_WOMENS_DATA_SUCCESS : {
            return {
                ...state,
                Womens : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_WOMENS_DATA_FAILURE : {
            return {
                ...state,
                isLoading : false,
                Womens : [ ],
                isError : true
            }
        };

        case types.GET_MENS_DATA_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_MENS_DATA_SUCCESS : {
            return {
                ...state,
                Mens : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_MENS_DATA_FAILURE : {
            return {
                ...state,
                isLoading : false,
                Mens : [ ],
                isError : true
            }
        }
        
        default :
        return state
    }
    
}