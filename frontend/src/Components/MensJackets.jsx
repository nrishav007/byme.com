import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MensTopSection from "../CustomComponents/MensTopSection";
import Pagination from "../CustomComponents/Pagination";
import ProductsListing from "../CustomComponents/ProductsListing";
import ProgressLoader from "../CustomComponents/Progress";
import { MensJacketsData } from "../Fetch/Fetch";
import { GetMensJacketsFailure, GetMensJacketsRequest, GetMensJacketsSuccess } from "../Redux/Action";
import Footer from "./Footer";
import { getCurrentPage } from "./WomensAllClothing";

export default function MensJacketsPage ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,MensJackets} = useSelector((s)=>{
        return {
            isLoading : s.isLoading,
            isError : s.isError,
            MensJackets : s.MensJackets
        }
    });

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleJackets = ( ) =>{
        Dispatch(GetMensJacketsRequest( ))
        MensJacketsData(page,setTotalPage).then((res)=>{
            Dispatch(GetMensJacketsSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetMensJacketsFailure(err)))
    }

    useEffect(( ) =>{
        handleJackets( )
    },[page]);

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])
    return (
        <>
        <MensTopSection/>

        <Box mt='20px'>
            <ProductsListing data={MensJackets} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page)=>setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        </Box>
        <Footer/>
        </>
    )
}