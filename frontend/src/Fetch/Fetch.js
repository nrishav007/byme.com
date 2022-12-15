import axios from "axios"

export const HomeSildeShowData = ( ) =>{
    return axios.get(`https://grumpy-lion-waistcoat.cyclic.app/api/home/1`)
}

export const HomeMainBodyData = ( ) =>{
    return axios.get(`https://grumpy-lion-waistcoat.cyclic.app/api/home/2`)
}

export const HomeMainBody1Data = ( ) =>{
    return axios.get(`https://grumpy-lion-waistcoat.cyclic.app/api/home/3`)
}

export const BreakOutBrandsData = ( ) =>{
    return axios.get(`https://grumpy-lion-waistcoat.cyclic.app/api/home/4`)
}

export const TrendingNowData = ( ) =>{
    return axios.get(`https://grumpy-lion-waistcoat.cyclic.app/api/home/7`)
}

export const HotRightNowData = ( ) =>{
    return axios.get(`https://grumpy-lion-waistcoat.cyclic.app/api/home/6`)
}