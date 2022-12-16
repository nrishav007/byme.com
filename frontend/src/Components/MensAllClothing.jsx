import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { useSearchParams } from "react-router-dom";
import Pagination from "../CustomComponents/Pagination";
import ProductsListing from "../CustomComponents/ProductsListing";
import ProgressLoader from "../CustomComponents/Progress";
import { MensAllData } from "../Fetch/Fetch";
import { GetMensAllFailure, GetMensAllRequest, GetMensAllSuccess } from "../Redux/Action";
import { getCurrentPage } from "./WomensAllClothing";
export default function MensAllClothing ( ){
    const {MensAll,isLoading,isError} = useSelector((s)=>{
        return {
            MensAll : s.MensAll,
            isLoading : s.isLoading,
            isError : s.isError
        }
    })
    const Dispatch = useDispatch( );
    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleMenAll = ( ) =>{
        Dispatch(GetMensAllRequest( ));
        MensAllData(page,setTotalPage).then((res)=>{
            Dispatch(GetMensAllSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetMensAllFailure(err)))
    }

    useEffect(( ) =>{
        handleMenAll( );
    }, [page]);

    useEffect(( ) =>{
        setSearchParams({page})
    }, [page])

    return (
        <>
        <Box mt='20px'>
            <ProductsListing data={MensAll} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page)=>setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        </Box>
         
        </>
    )
}