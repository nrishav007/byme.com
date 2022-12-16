import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../CustomComponents/Pagination";
import ProductsListing from "../CustomComponents/ProductsListing";
import ProgressLoader from "../CustomComponents/Progress";
import { WomensAllClothingData } from "../Fetch/Fetch";
import { GetWomensALLDataFailure, GetWomensALLDataRequest, GetWomensALLDataSuccess } from "../Redux/Action";

export const getCurrentPage = (value)=>{
    value = Number(value)
    if(value === 'number' && value <= 0) {
        value = 1;
    };
    if(!value){
        value = 1;
    };
    return value;
};

export default function WomensAllClothing ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,WomensAll} = useSelector((store)=>{
        return {
            isLoading : store.isLoading,
            isError : store.isError,
            WomensAll : store.WomensAll
        }
    })

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

   
    const handleAllWomens = ( ) =>{
        Dispatch(GetWomensALLDataRequest( ));
        WomensAllClothingData(page,setTotalPage).then((res)=>{
            Dispatch(GetWomensALLDataSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetWomensALLDataFailure(err)))
    }

    useEffect(( ) =>{
        handleAllWomens( )
    },[page])

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])   

    return (
        <>
        <Box mt='20px'>
        <ProductsListing data={WomensAll} isLoading={isLoading} isError={isError}/>
        </Box>
        <Pagination current={page} onChange={(page) => setPage(page)} totalPage={totalPage} limit={18}/>
        {isLoading && <ProgressLoader size='sm'  colorScheme='black'/>}
        </>
    )
}