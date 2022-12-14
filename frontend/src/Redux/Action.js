import * as types from "./ActionTypes"

export const GetWomensDataRequest = ( ) =>{
    return {
        type : types.GET_WOMENS_DATA_REQUEST
    }
};

export const GetWomensDataSuccess = (payload) =>{
    return {
        type : types.GET_WOMENS_DATA_SUCCESS,
        payload,

    }
};

export const GetWomensDataFailure = ( ) =>{
    return {
        type : types.GET_WOMENS_DATA_FAILURE
    }
};

export const GetMensDataRequest = ( ) =>{
    return {
        type : types.GET_MENS_DATA_REQUEST
    }
};

export const GetMensDataSuccess = (payload) =>{
    return {
        type : types.GET_MENS_DATA_SUCCESS,
        payload,

    }
};

export const GetMensDataFailure = ( ) =>{
    return {
        type : types.GET_MENS_DATA_FAILURE
    }
};