import MensTopSection from "../CustomComponents/MensTopSection";
import {useDispatch,useSelector} from "react-redux"
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "./WomensAllClothing";
import { useState } from "react";
import { MensBeachWearData } from "../Fetch/Fetch";
import { GetMensBeachFailure, GetMensBeachRequest, GetMensBeachSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ProductsListing from "../CustomComponents/ProductsListing";
import Pagination from "../CustomComponents/Pagination";
import Footer from "./Footer";
import ProgressLoader from "../CustomComponents/Progress";

export default function MensBeachWear ( ){
    const Dispatch = useDispatch( );
    const {isLoading,isError,MensBeach} = useSelector((s)=>{
        return {
            isLoading : s.isLoading,
            isError : s.isError,
            MensBeach : s.MensBeach
        }
    });

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleBeach = ( ) =>{
        Dispatch(GetMensBeachRequest( ))
        MensBeachWearData(page,setTotalPage).then((res)=>{
            Dispatch(GetMensBeachSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetMensBeachFailure(err)))
    }

    useEffect(( ) =>{
        handleBeach( );
    },[page]);

    useEffect(( ) =>{
        setSearchParams({page});
    },[page])
    return (
        <>
        <MensTopSection/>
        <Box>
            <ProductsListing data={MensBeach} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page) => setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme={'black'}/>}
        </Box>
        <Footer/>
        </>
    )
}