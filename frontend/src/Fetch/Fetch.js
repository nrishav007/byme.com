import axios from "axios"

export const HomeSildeShowData = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/api/home/1`)
}

export const HomeMainBodyData = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/api/home/2`)
}

export const HomeMainBody1Data = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/api/home/3`)
}

export const BreakOutBrandsData = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/api/home/4`)
}

export const TrendingNowData = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/api/home/5`)
}

export const HotRightNowData = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/api/home/6`)
}

export const WomensAllClothingData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=dresses&page=${page}`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}