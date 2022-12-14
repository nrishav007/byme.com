import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {useSelector,useDispatch, shallowEqual} from "react-redux"

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
        <Box borderBottom='1px solid black' bg='RGBA(0, 0, 0, 0.06)' fontSize={{base : '15px', md: '20px', lg :'25px'}} padding={{base : '10px', md :'15px'}} textAlign={{base :'center', md :'left'}} letterSpacing='2px' fontWeight='550'>
            <Text>CLOTHING FOR WOMEN</Text>
        </Box>

        <Box width={{base : "70%", md: '70%', lg : '60%'}} m='auto' mt={{base : '10px', md: '20px', lg: '30px'}}>
            <Image m='auto' src='https://cdna.lystit.com/static/n/static-img/brand-ads/gucci-2b0c2682-47b4-49dc-bf75-abc3d285e122.o.jpg'/>
        </Box>
        </>
    )
}