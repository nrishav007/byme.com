import * as types from "./ActionTypes"


export const GetHomeSlideShowRequest = ( ) =>{
    return {
        type : types.GET_HOME_SLIDESHOW_REQUEST
    }
}

export const GetHomeSlideShowSuccess = (payload) =>{
    return {
        type : types.GET_HOME_SLIDESHOW_SUCCESS,
        payload
    }
}

export const GetHomeSlideShowFailure = ( ) =>{
    return {
        type : types.GET_HOME_SLIDESHOW_FAILURE
    }
}



export const GetHomeMainBodyRequest = ( ) =>{
    return {
        type : types.GET_HOME_MAINBODY_REQUEST
    }
}

export const GetHomeMainBodySuccess = (payload) =>{
    return {
        type : types.GET_HOME_MAINBODY_SUCCESS,
        payload : payload
    }
}

export const GetHomeMainBodyFailure = ( ) =>{
    return {
        type : types.GET_HOME_MAINBODY_FAILURE
    }
}



export const GetHomeMainBody1Request = ( ) =>{
    return {
        type : types.GET_HOME_MAINBODY1_REQUEST
    }
}

export const GetHomeMainBody1Success = (payload) =>{
    return {
        type : types.GET_HOME_MAINBODY1_SUCCESS,
        payload : payload
    }
}

export const GetHomeMainBody1Failure = ( ) =>{
    return {
        type : types.GET_HOME_MAINBODY1_FAILURE
    }
}



export const GetBreakoutBrandsRequest = ( ) =>{
    return {
        type : types.GET_BREAKOUT_BRANDS_REQUEST
    }
}

export const GetBreakoutBrandsSuccess= (payload) =>{
    return {
        type : types.GET_BREAKOUT_BRANDS_SUCCESS,
        payload,
    }
}

export const GetBreakoutBrandsFailure = ( ) =>{
    return {
        type : types.GET_BREAKOUT_BRANDS_FAILURE
    }
}



export const GetTrendingNowRequest = ( ) =>{
    return {
        type : types.GET_TRENDING_NOW_REQUEST
    }
}

export const GetTrendingNowSuccess= (payload) =>{
    return {
        type : types.GET_TRENDING_NOW_SUCCESS,
        payload,
    }
}

export const GetTrendingNowFailure = ( ) =>{
    return {
        type : types.GET_TRENDING_NOW_FAILURE
    }
}


export const GetHotNowRequest = ( ) =>{
    return {
        type : types.GET_HOTNOW_REQUEST
    }
}

export const GetHotNowSuccess = (payload) =>{
    return {
        type : types.GET_HOTNOW_SUCCESS,
        payload
    }
}

export const GetHotNowFailure = ( ) =>{
    return {
        type : types.GET_HOTNOW_FAILURE
    }
}



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