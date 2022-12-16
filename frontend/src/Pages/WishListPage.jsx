import { useEffect } from "react";
import { GetWishListData } from "../Fetch/Fetch";

export default function WishlistPage ( ) {
    const handleWislist = ( ) =>{
        GetWishListData( ).then((res)=>{
            console.log(res,'Get')
        })
    };

    useEffect(( ) =>{
        handleWislist( )
    },[ ])
    
    return (
        <>
        From Wish List
        </>
    )
}