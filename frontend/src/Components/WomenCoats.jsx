import { Box, Flex, Text } from "@chakra-ui/react"
import { Link, useSearchParams } from "react-router-dom"
import Navbar from "./Navbar"
import {useSelector,useDispatch} from "react-redux"
import { WomensCoatsData } from "../Fetch/Fetch"
import { GetWomenCoatsFailure, GetWomenCoatsRequest, GetWomenCoatsSuccess } from "../Redux/Action"
import { useEffect, useState } from "react"
import ProductsListing from "../CustomComponents/ProductsListing"
import { getCurrentPage } from "./WomensAllClothing"
import Pagination from "../CustomComponents/Pagination"
import ProgressLoader from "../CustomComponents/Progress"
import Footer from "./Footer"
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
        <Navbar/>
        <Box height={'85px'}></Box>
        <Flex borderBottom='1px solid black' justifyContent='space-around' fontSize={{base : '10px', md: '15px', lg :'15px'}} padding={{base : '10px', md :'15px',lg :'10px'}} textAlign={{base :'center', md :'left'}}>
            <Link to='/women/all-clothing'><Text>All Clothing</Text></Link>
            <Link to='/women/coats'><Text>Coats</Text></Link>
            <Link to='/women/dresses'><Text>Swim Wear</Text></Link>
            <Link to='/women/hosiery'><Text>Hosiery</Text></Link>
            <Link to='/women/jackets'><Text>Jackets</Text></Link>
            <Link to='/women/jeans'><Text>Jeans</Text></Link>
        </Flex>

        <Box mt={{base :'20px'}}>
            <ProductsListing data={WomensCoats} isError={isError} isLoading={isLoading}/>
        </Box>

        <Box>
            {isLoading && <ProgressLoader size='sm'  colorScheme='black'/>}
            <Pagination current={page} onChange={(page) => setPage(page)}/>
        </Box>

        <Box>
            <Footer/>
        </Box>

        </>
    )
}