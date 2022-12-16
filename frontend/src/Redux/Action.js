import * as types from "./ActionTypes"

//SlideShow
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


//MainBody
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


//MainBody1
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


//BreakoutBrands
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


//TrendingNow
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

//HotNow
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


//WomensAllData
export const GetWomensALLDataRequest = ( ) =>{
    return {
        type : types.GET_WOMENS_ALL_DATA_REQUEST
    }
};

export const GetWomensALLDataSuccess = (payload) =>{
    return {
        type : types.GET_WOMENS_ALL_DATA_SUCCESS,
        payload,

    }
};

export const GetWomensALLDataFailure = ( ) =>{
    return {
        type : types.GET_WOMENS_ALL_DATA_FAILURE
    }
};


//WoemensCoats
export const GetWomenCoatsRequest = ( ) =>{
    return {
        type : types.GET_WOMENS_COATS_REQUEST
    }
}

export const GetWomenCoatsSuccess = (payload) =>{
    return {
        type : types.GET_WOMENS_COATS_SUCCESS,
        payload
    }
}

export const GetWomenCoatsFailure = ( ) =>{
    return {
        type : types.GET_WOMENS_COATS_FAILURE
    }
}


//WomensSwim
export const GetWomenSwimRequest = ( ) =>{
    return {
        type : types.GET_WOMENS_BEACH_REQUEST
    }
}

export const GetWomenSwimSuccess = (payload) =>{
    return {
        type : types.GET_WOMENS_BEACH_SUCCESS,
        payload,
    }
}

export const GetWomenSwimFailure = ( ) =>{
    return {
        type : types.GET_WOMENS_BEACH_FAILURE
    }
}


//WomensHosiery
export const GetWomenHosieryRequest = ( ) => {
    return {
        type : types.GET_WOMENS_HOSIERY_REQUEST
    }
}

export const GetWomenHosierySucccess = (payload) => {
    return {
        type : types.GET_WOMENS_HOSIERY_SUCCESS,
        payload,

    }
}

export const GetWomenHosieryFailure = ( ) => {
    return {
        type : types.GET_WOMENS_HOSIERY_FAILURE
    }
}


//WomenJackets
export const GetWomenJacketsRequest  = ( ) =>{
    return {
        type : types.GET_WOMENS_JACKETS_REQUEST
    }
}

export const GetWomenJacketsSuccess  = (payload) =>{
    return {
        type : types.GET_WOMENS_JACKETS_SUCCESS,
        payload,
    }
}

export const GetWomenJacketsFailure  = ( ) =>{
    return {
        type : types.GET_WOMENS_JACKETS_FAILURE
    }
}



//WomensJeans
export const GetWomenJeansRequest  = ( ) =>{
    return {
        type : types.GET_WOMENS_JEANS_REQUEST
    }
}

export const GetWomenJeansSuccess  = (payload) =>{
    return {
        type : types.GET_WOMENS_JEANS_SUCCESS,
        payload,
    }
}

export const GetWomenJeansFailure  = ( ) =>{
    return {
        type : types.GET_WOMENS_JEANS_FAILURE
    }
}


//MensAll
export const GetMensAllRequest = ( ) =>{
    return {
        type : types.GET_MENS_ALL_REQUEST
    }
};

export const GetMensAllSuccess = (payload) =>{
    return {
        type : types.GET_MENS_ALL_SUCCESS,
        payload,
    }
};

export const GetMensAllFailure = ( ) =>{
    return {
        type : types.GET_MENS_ALL_FAILURE
    }
};



//MensCoats 
export const GetMensCoatslRequest = ( ) =>{
    return {
        type : types.GET_MENS_COATS_REQUEST
    }
};

export const GetMensCoatslSuccess = (payload) =>{
    return {
        type : types.GET_MENS_COATS_SUCCESS,
        payload,
    }
};

export const GetMensCoatslFailure = ( ) =>{
    return {
        type : types.GET_MENS_COATS_FAILURE
    }
};



//MensBeach
export const GetMensBeachRequest = ( ) =>{
    return {
        type : types.GET_MENS_BEACH_REQUEST
    }
};

export const GetMensBeachSuccess = (payload) =>{
    return {
        type : types.GET_MENS_BEACH_SUCCESS,
        payload,
    }
};

export const GetMensBeachFailure = ( ) =>{
    return {
        type : types.GET_MENS_BEACH_FAILURE
    }
};



//MensSweaters
export const GetMensSweatersRequest = ( ) =>{
    return {
        type : types.GET_MENS_SWEATERS_REQUEST
    }
};

export const GetMensSweatersSuccess = (payload) =>{
    return {
        type : types.GET_MENS_SWEATERS_SUCCESS,
        payload,
    }
};

export const GetMensSweatersFailure = ( ) =>{
    return {
        type : types.GET_MENS_SWEATERS_FAILURE
    }
};



//MensJackets
export const GetMensJacketsRequest = ( ) =>{
    return {
        type : types.GET_MENS_JACKETS_REQUEST
    }
};

export const GetMensJacketsSuccess = (payload) =>{
    return {
        type : types.GET_MENS_JACKETS_SUCCESS,
        payload,
    }
};

export const GetMensJacketsFailure = ( ) =>{
    return {
        type : types.GET_MENS_JACKETS_FAILURE
    }
};



//MensJeans
export const GetMensJeansRequest = ( ) =>{
    return {
        type : types.GET_MENS_JEANS_REQUEST
    }
};

export const GetMensJeansSuccess = (payload) =>{
    return {
        type : types.GET_MENS_JEANS_SUCCESS,
        payload,
    }
};

export const GetMensJeansFailure = ( ) =>{
    return {
        type : types.GET_MENS_JEANS_FAILURE
    }
};


//GetWishlist
export const GetWishListRequest = ( ) =>{
    return {
        type : types.GET_WISHLIST_REQUEST
    }
};

export const GetWishListSuccess = (payload) =>{
    return {
        type : types.GET_WISHLIST_SUCCESS,
        payload,
    }
};

export const GetWishListFailure = ( ) =>{
    return {
        type : types.GET_WISHLIST_FAILURE
    }
};