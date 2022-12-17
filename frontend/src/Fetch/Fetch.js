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
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=dresses&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}

export const WomensCoatsData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=coats&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}

export const WomensSwimWearData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=beachwear&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}

export const WomensHosieryrData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=hosiery&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}


export const WomensJacketsData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=jackets&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}


export const WomensJeansData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/women?category=jeans&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}


export const MensAllData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/men?category=shirts&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}


export const MensCoatsData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/men?category=coats&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}

export const MensBeachWearData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/men?category=beachwear&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}


export const MensSweatersData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/men?category=sweaters&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}


export const MensJacketsData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/men?category=jackets&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}


export const MensJeansData = (page=1,setTotalPage) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/product/men?category=jeans&page=${page}&limit=36`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res
    })
}

export const getsinglepage = (id) =>{
     return axios.get(`https://coral-perch-cuff.cyclic.app/product/single/${id}`)

}

export const AddToWishListData = (payload) =>{
    return axios.post(`https://coral-perch-cuff.cyclic.app/wish/create`, payload,{
        headers : {
            "authorization" : `Bearer ${localStorage.getItem("logintoken")}`
        }
    })
}

export const GetWishListData = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/wish`,{
        headers : {
            "authorization" : `Bearer ${localStorage.getItem("logintoken")}`
        }
    })
}


export const DeleteWishList = (id) =>{
    return axios.delete(`https://coral-perch-cuff.cyclic.app/wish/delete/${id}`,{
        headers : {
            "authorization" : `Bearer ${localStorage.getItem("logintoken")}`
        }
    })
}


export const GetCart = ( ) =>{
    return axios.get(`https://coral-perch-cuff.cyclic.app/cart`,{
        headers : {
            "authorization" : `Bearer ${localStorage.getItem("logintoken")}`
        }
    })
}


export const AddToCartData = (payload) =>{
    return axios.post(`https://coral-perch-cuff.cyclic.app/cart/create`, payload,{
        headers : {
            "authorization" : `Bearer ${localStorage.getItem("logintoken")}`
        }
    })
}


export const DeleteCart = (id) =>{
    return axios.delete(`https://coral-perch-cuff.cyclic.app/cart/delete/${id}`,{
        headers : {
            "authorization" : `Bearer ${localStorage.getItem("logintoken")}`
        }
    })
}