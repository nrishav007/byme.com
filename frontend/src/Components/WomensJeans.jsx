import TopSection from "../CustomComponents/TopSection"
import {useSelector,useDispatch} from "react-redux"
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "./WomensAllClothing";
import { useState } from "react";
import { WomensJeansData } from "../Fetch/Fetch";
import { GetWomenJeansFailure, GetWomenJeansRequest, GetWomenJeansSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ProductsListing from "../CustomComponents/ProductsListing";
import Pagination from "../CustomComponents/Pagination";
import ProgressLoader from "../CustomComponents/Progress";
import Footer from "./Footer";

export default function WomensJeansPage ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,WomensJeans} = useSelector((s)=>{
        return{
            isLoading : s.isLoading,
            isError : s.isError,
            WomensJeans : s.WomensJeans
        }
    })

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleJeans = ( ) =>{
        Dispatch(GetWomenJeansRequest( ))
        WomensJeansData(page,setTotalPage).then((res)=>{
            Dispatch(GetWomenJeansSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetWomenJeansFailure(err)))
    }

    useEffect(( ) =>{
        handleJeans( );
    }, [page]);

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])
    return(
        <>
        <TopSection/>

        <Box mt='20px'>
            <ProductsListing data={WomensJeans} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page)=>setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        </Box>

        <Footer/>
        </>
    )
}