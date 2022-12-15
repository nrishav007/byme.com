import TopSection from "../CustomComponents/TopSection";
import {useSelector,useDispatch} from "react-redux"
import {useSearchParams} from "react-router-dom"
import { WomensJacketsData } from "../Fetch/Fetch";
import { GetWomenJacketsFailure, GetWomenJacketsRequest, GetWomenJacketsSuccess } from "../Redux/Action";
import { useEffect, useState } from "react";
import { getCurrentPage } from "./WomensAllClothing";
import { Box } from "@chakra-ui/react";
import ProductsListing from "../CustomComponents/ProductsListing";
import Pagination from "../CustomComponents/Pagination";
import Footer from "./Footer";
import ProgressLoader from "../CustomComponents/Progress";

export default function WomensJackets ( ) {
    const {isLoading,isError,WJackets} = useSelector((store)=>{
        return {
            isLoading : store.isLoading,
            isError : store.isError,
            WJackets : store.WJackets
        }
    })
    const Dispatch = useDispatch( );

   
    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);


    const handleJackets = ( ) =>{
        Dispatch(GetWomenJacketsRequest( ))
        WomensJacketsData(page,setTotalPage).then((res)=>{
            Dispatch(GetWomenJacketsSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetWomenJacketsFailure(err)))
    }

    useEffect(( ) =>{
        handleJackets( );
    }, [page]);

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])
    return (
        <>
        <TopSection/>

        <Box mt='20px'>
            <ProductsListing data={WJackets} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page) => setPage(page)}/>
            {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        </Box>

        <Footer/>
        </>
    )
}