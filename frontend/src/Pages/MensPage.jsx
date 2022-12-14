import { Box, Text } from "@chakra-ui/layout";
import Navbar from "../Components/Navbar";

export default function MensPage ( ) {
    return (
        <>
        <Navbar/>
        <Box height={'85px'}></Box>
        <Box borderBottom='1px solid black' bg='RGBA(0, 0, 0, 0.06)' fontSize={{base : '15px', md: '20px', lg :'25px'}} padding={{base : '10px', md :'15px'}} textAlign={{base :'center', md :'left'}} letterSpacing='2px' fontWeight='550'>
            <Text>CLOTHING FOR MEN</Text>
        </Box>
        </>
    )
}