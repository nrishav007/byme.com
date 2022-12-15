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
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=dresses&page=${page}&limit=18`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}

export const WomensCoatsData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=coats&page=${page}&limit=18`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}

export const WomensSwimWearData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=beachwear&page=${page}&limit=18`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}