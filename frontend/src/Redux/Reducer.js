import * as types from "./ActionTypes"
const InitialData = {
    HomeSlideShow : [ ],
    HomeMainBody : [ ],
    HomeMainBody1 : [ ],
    BreakOutBrands : [ ],
    TrendingNow : [ ],
    HotNow : [ ],
    WomensAll : [ ],
    WomensCoats : [ ],
    WomensBeach : [ ],
    Mens : [ ],
    isLoading : false,
    isError : false
}

export default function Reducer (state=InitialData, action) {
    const {payload,type} = action;

    switch(type){

        case types.GET_HOME_SLIDESHOW_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_HOME_SLIDESHOW_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                HomeSlideShow : payload,
                isError : false
            }
        }

        case types.GET_HOME_SLIDESHOW_FAILURE : {
            return {
                ...state,
                isLoading : false,
                HomeSlideShow : [ ],
                isError : true
            }
        }



        case types.GET_HOME_MAINBODY_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_HOME_MAINBODY_SUCCESS : {
            return {
                ...state,
                HomeMainBody : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_HOME_MAINBODY_FAILURE : {
            return {
                ...state,
                HomeMainBody : [ ],
                isLoading : false,
                isError : true
            }
        }



        case types.GET_HOME_MAINBODY1_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_HOME_MAINBODY1_SUCCESS : {
            return {
                ...state,
                HomeMainBody1 : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_HOME_MAINBODY1_FAILURE : {
            return {
                ...state,
                HomeMainBody1 : [ ],
                isLoading : false,
                isError : true
            }
        }

        

        case  types.GET_BREAKOUT_BRANDS_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case  types.GET_BREAKOUT_BRANDS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                BreakOutBrands : payload,
                isError : false
            }
        }

        case  types.GET_BREAKOUT_BRANDS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                BreakOutBrands : [ ]
            }
        }



        case  types.GET_TRENDING_NOW_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case  types.GET_TRENDING_NOW_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                TrendingNow : payload,
                isError : false
            }
        }

        case  types.GET_TRENDING_NOW_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                TrendingNow : [ ]
            }
        }



        case types.GET_HOTNOW_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_HOTNOW_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                HotNow : payload,
                isError : false
            }
        }

        case types.GET_HOTNOW_FAILURE : {
            return {
                ...state,
                HotNow : [ ],
                isLoading : false,
                isError : true
            }
        }


        
        case types.GET_WOMENS_ALL_DATA_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_WOMENS_ALL_DATA_SUCCESS : {
            return {
                ...state,
                WomensAll : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_WOMENS_ALL_DATA_FAILURE : {
            return {
                ...state,
                isLoading : false,
                WomensAll : [ ],
                isError : true
            }
        };



        case types.GET_WOMENS_COATS_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_WOMENS_COATS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                WomensCoats : payload,
                isError : false
            }
        }

        case types.GET_WOMENS_COATS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                WomensCoats : [ ]
            }
        }




        case types.GET_WOMENS_BEACH_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        
        case types.GET_WOMENS_BEACH_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                WomensBeach : payload,
                isError : false
            }
        }

        
        case types.GET_WOMENS_BEACH_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                WomensBeach : [ ]
            }
        }








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