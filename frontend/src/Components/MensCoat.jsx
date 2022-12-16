import MensTopSection from "../CustomComponents/MensTopSection";
import {useDispatch,useSelector} from "react-redux"
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "./WomensAllClothing";
import { useState } from "react";
import { MensCoatsData } from "../Fetch/Fetch";
import { GetMensCoatslFailure, GetMensCoatslRequest, GetMensCoatslSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ProductsListing from "../CustomComponents/ProductsListing";
import Pagination from "../CustomComponents/Pagination";
import Footer from "./Footer"
import ProgressLoader from "../CustomComponents/Progress";

export default function MensCoatsPage ( ){
    const Dispatch = useDispatch( );
    const {isLoading,isError,MensCoats} = useSelector((s)=>{
        return {
            isLoading : s.isLoading,
            isError : s.isError,
            MensCoats : s.MensCoats
        }
    });
    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleCoats = ( ) =>{
        Dispatch(GetMensCoatslRequest( ))
        MensCoatsData(page,setTotalPage).then((res)=>{
            Dispatch(GetMensCoatslSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetMensCoatslFailure(err)))
    }

    useEffect(( ) =>{
        handleCoats( );
    }, [page]);

    useEffect(( ) =>{
        setSearchParams({page});
    },[page])
    return(
        <>
        <MensTopSection/>

        <Box mt='20px'>
            <ProductsListing data={MensCoats} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page)=>setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        </Box>

        <Footer/>
        </>
    )
}