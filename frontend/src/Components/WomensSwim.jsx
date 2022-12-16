import { Box } from "@chakra-ui/react"
import {useSelector,useDispatch} from "react-redux"
import { WomensSwimWearData } from "../Fetch/Fetch"
import { GetWomenSwimFailure, GetWomenSwimRequest, GetWomenSwimSuccess } from "../Redux/Action"
import { useEffect, useState } from "react"
import ProductsListing from "../CustomComponents/ProductsListing"
import { getCurrentPage } from "./WomensAllClothing"
import Pagination from "../CustomComponents/Pagination"
import ProgressLoader from "../CustomComponents/Progress"
import Footer from "./Footer"
import TopSection from "../CustomComponents/WomensTopSection"
import { useSearchParams } from "react-router-dom"

export default function WomenSwimWear ( ) {
    const {isLoading,isError,WomensBeach} = useSelector((x)=>{
        return{
            isLoading : x.isLoading,
            isError : x.isError,
            WomensBeach : x.WomensBeach
        }
    })
    const Dispatch = useDispatch( );

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleWomenSwim = ( ) =>{
        GetWomenSwimRequest( );
        WomensSwimWearData(page,setTotalPage).then((res)=>{
            Dispatch(GetWomenSwimSuccess(res.data))
        })
        .catch((err)=>Dispatch(GetWomenSwimFailure(err)))
    }

    useEffect(( ) =>{
        handleWomenSwim( )
    }, [page])

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])

    return (
        <>
        <TopSection/>

        <Box mt={{base :'20px'}}>
            <ProductsListing data={WomensBeach} isLoading={isLoading} isError={isError}/>
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