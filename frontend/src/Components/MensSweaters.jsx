import MensTopSection from "../CustomComponents/MensTopSection";
import {useDispatch,useSelector} from "react-redux"
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "./WomensAllClothing";
import { useState } from "react";
import { MensSweatersData } from "../Fetch/Fetch";
import { GetMensSweatersFailure, GetMensSweatersRequest, GetMensSweatersSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ProductsListing from "../CustomComponents/ProductsListing";
import Pagination from "../CustomComponents/Pagination";
import ProgressLoader from "../CustomComponents/Progress";
import Footer from "./Footer";
export default function MensSweaters ( ){
    const Dispatch = useDispatch( );
    const {isLoading,isError,MensSweaters} = useSelector((s)=>{
        return {
            isLoading : s.isLoading,
            isError : s.isError,
            MensSweaters : s.MensSweaters
        }
    });

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleSweaters = ( ) =>{
        Dispatch(GetMensSweatersRequest( ))
        MensSweatersData(page,setTotalPage).then((res)=>{
            Dispatch(GetMensSweatersSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetMensSweatersFailure(err)))
    }

    useEffect(( ) =>{
        handleSweaters( )
    }, [page]);

    useEffect(( ) =>{
        setSearchParams({page})
    },[page]);
    return (
        <>
        <MensTopSection/>

        <Box>
            <ProductsListing data={MensSweaters} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box mt='20px'>
            <Pagination current={page} onChange={(page)=>setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        </Box>
        <Footer/>
        </>
    )
}