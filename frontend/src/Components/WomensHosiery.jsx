import { Box } from "@chakra-ui/react"
import {useSelector,useDispatch} from "react-redux"
import { WomensHosieryrData} from "../Fetch/Fetch"
import { GetWomenHosieryFailure, GetWomenHosieryRequest, GetWomenHosierySucccess } from "../Redux/Action"
import { useEffect, useState } from "react"
import ProductsListing from "../CustomComponents/ProductsListing"
import { getCurrentPage } from "./WomensAllClothing"
import Pagination from "../CustomComponents/Pagination"
import Footer from "./Footer"
import TopSection from "../CustomComponents/WomensTopSection"
import { useSearchParams } from "react-router-dom"
import ProgressLoader from "../CustomComponents/Progress"

export default function WomenHosiery ( ) {
    const {isLoading,isError,WomensHosiery} = useSelector((x)=>{
        return{
            isLoading : x.isLoading,
            isError : x.isError,
            WomensHosiery : x.WomensHosiery
        }
    })
    const Dispatch = useDispatch( );

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleWomenHosiery = ( ) =>{
        GetWomenHosieryRequest( );
        WomensHosieryrData(page,setTotalPage).then((res)=>{
            Dispatch(GetWomenHosierySucccess(res.data))
        })
        .catch((err)=>Dispatch(GetWomenHosieryFailure(err)))
    }

    useEffect(( ) =>{
        handleWomenHosiery( )
    }, [page])

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])

    return (
        <>
        <TopSection/>

        <Box mt={{base :'20px'}}>
            <ProductsListing data={WomensHosiery} isLoading={isLoading} isError={isError}/>
        </Box>

        <Box>
            <Pagination current={page} onChange={(page) => setPage(page)}/>
            {isLoading && <ProgressLoader size='sm'  colorScheme='black'/>}
        </Box>

        <Box>
            <Footer/>
        </Box>
        </>
    )
}