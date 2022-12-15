import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export default function MensPage ( ) {
    return (
        <>
        <Navbar/>
        <Box height={'85px'}></Box>
        <Box borderBottom='1px solid black' bg='RGBA(0, 0, 0, 0.06)' fontSize={{base : '15px', md: '20px', lg :'25px'}} padding={{base : '10px', md :'15px'}} textAlign={{base :'center', md :'left'}} letterSpacing='2px' fontWeight='550'>
            <Text>CLOTHING FOR MEN</Text>
        </Box>

        <Box width={{base : "70%", md: '70%', lg : '60%'}} m='auto' mt={{base : '10px', md: '20px', lg: '30px'}}>
            <Image m='auto' src='https://cdna.lystit.com/static/n/static-img/brand-ads/dolcegabbana-90263e5e-644d-4273-bea7-1eb0db2e5fa8.o.jpg'/>
        </Box>
        </>
    )
}