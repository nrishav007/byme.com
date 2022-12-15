import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {useSelector,useDispatch, shallowEqual} from "react-redux"
import { Link } from "react-router-dom";

export default function WomensPage ( ) {
    const {isLoading,isError,Womens} = useSelector((store) =>{
        return {
            isLoading : store.isLoading,
            isError : store.isError,
            Womens : store.Womens
        }
    }, shallowEqual);
    return (
        <>
        <Navbar/>
        <Box height={'85px'}></Box>
        <Flex borderBottom='1px solid black' justifyContent='space-around' fontSize={{base : '10px', md: '15px', lg :'15px'}} padding={{base : '10px', md :'15px',lg :'10px'}} textAlign={{base :'center', md :'left'}}>
            <Link to='/womens/allclothing'><Text>All Clothing</Text></Link>
            <Link to='/womens/coats'><Text>Coats</Text></Link>
            <Link to='/womens/dresses'><Text>Dresses</Text></Link>
            <Link to='/womens/hosiery'><Text>Hosiery</Text></Link>
            <Link to='/womens/jackets'><Text>Jackets</Text></Link>
            <Link to='/womens/jeans'><Text>Jeans</Text></Link>
        </Flex>

        <Box width={{base : "80%", md: '70%', lg : '60%'}} m='auto' mt={{base : '10px', md: '20px', lg: '30px'}}>
            <Image m='auto' src='https://cdna.lystit.com/static/n/static-img/brand-ads/gucci-2b0c2682-47b4-49dc-bf75-abc3d285e122.o.jpg'/>
        </Box>
        </>
    )
}