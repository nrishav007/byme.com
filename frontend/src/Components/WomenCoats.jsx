import { Box } from "@chakra-ui/react"
import {useSearchParams } from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { WomensCoatsData } from "../Fetch/Fetch"
import { GetWomenCoatsFailure, GetWomenCoatsRequest, GetWomenCoatsSuccess } from "../Redux/Action"
import { useEffect, useState } from "react"
import ProductsListing from "../CustomComponents/ProductsListing"
import { getCurrentPage } from "./WomensAllClothing"
import Pagination from "../CustomComponents/Pagination"
import ProgressLoader from "../CustomComponents/Progress"
import Footer from "./Footer"
import TopSection from "../CustomComponents/WomensTopSection"
export default function WomenCoatsPage ( ) {
    const {isLoading,isError,WomensCoats} = useSelector((x)=>{
        return{
            isLoading : x.isLoading,
            isError : x.isError,
            WomensCoats : x.WomensCoats
        }
    })
    const Dispatch = useDispatch( );

    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);


    const handleWomensCoat = ( ) =>{
        Dispatch(GetWomenCoatsRequest( ))
        WomensCoatsData(page,setTotalPage).then((res)=>{
            Dispatch(GetWomenCoatsSuccess(res.data))
        })
        .catch((err) => Dispatch(GetWomenCoatsFailure(err)))
    }

    useEffect(( ) =>{
        handleWomensCoat( )
    }, [ page])

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])
    return (
        <>
        <TopSection/>

        <Box mt={{base :'20px'}}>
            <ProductsListing data={WomensCoats} isLoading={isLoading} isError={isError}/>
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