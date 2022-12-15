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
    WomensHosiery : [ ],
    WJackets : [ ],
    WomensJeans : [],
    MensAll : [ ],
    MensCoats : [ ],
    MensBeach : [ ],
    MensSweaters : [ ],
    isLoading : false,
    isError : false
}

export default function Reducer (state=InitialData, action) {
    const {payload,type} = action;

    switch(type){

 //SideShow
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



 //MainBody
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


//MainBody1
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

        
//BreakOutBrands
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



//TrendingNow
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



//HotNow
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


//WomensAllData  
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



//WomensCoat
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



//WomensBeach
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



//WomensHosiery
        case types.GET_WOMENS_HOSIERY_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        
        case types.GET_WOMENS_HOSIERY_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                WomensHosiery : payload,
                isError : false
            }
        }

        
        case types.GET_WOMENS_HOSIERY_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                WomensHosiery : [ ],
            }
        }



//WomenJackets
        case types.GET_WOMENS_JACKETS_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_WOMENS_JACKETS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                WJackets : payload,
                isError : false
            }
        }

        case types.GET_WOMENS_JACKETS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                WJackets : [ ]
            }
        }



//WomenJeans
        case types.GET_WOMENS_JEANS_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_WOMENS_JEANS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                WomensJeans : payload,
                isError : false
            }
        }

        case types.GET_WOMENS_JEANS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                WomensJeans : [ ]
            }
        }



//MensALL
        case types.GET_MENS_ALL_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_MENS_ALL_SUCCESS : {
            return {
                ...state,
                MensAll : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_MENS_ALL_FAILURE : {
            return {
                ...state,
                isLoading : false,
                MensAll : [ ],
                isError : true
            }
        }


//MensCoats
        case types.GET_MENS_COATS_REQUEST: {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        
        case types.GET_MENS_COATS_SUCCESS : {
            return {
                ...state,
                MensCoats : payload,
                isLoading : false,
                isError : false
            }
        }
        
        case types.GET_MENS_COATS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                MensCoats : [ ],
                isError : true
            }
        }



//MensBeach-Wear
        case types.GET_MENS_BEACH_REQUEST: {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        
        case types.GET_MENS_BEACH_SUCCESS : {
            return {
                ...state,
                MensBeach : payload,
                isLoading : false,
                isError : false
            }
        }
        
        case types.GET_MENS_BEACH_FAILURE : {
            return {
                ...state,
                isLoading : false,
                MensBeach : [ ],
                isError : true
            }
        }



//MensSweaters
        case types.GET_MENS_SWEATERS_REQUEST: {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        
        case types.GET_MENS_SWEATERS_SUCCESS : {
            return {
                ...state,
                MensSweaters : payload,
                isLoading : false,
                isError : false
            }
        }
        
        case types.GET_MENS_SWEATERS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                MensSweaters : [ ],
                isError : true
            }
        }
        
        default :
        return state
    }
    
}