import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function MensTopSection ( ) {
    return (
        <>
        <Navbar/>
        <Box height={'85px'}></Box>
        <Flex borderBottom='1px solid black' justifyContent='space-around' fontSize={{base : '10px', md: '15px', lg :'15px'}} padding={{base : '10px', md :'15px',lg :'10px'}} textAlign={{base :'center', md :'left'}}>
            <Link to='/men/all-clothing'><Text>All Clothing</Text></Link>
            <Link to='/men/coats'><Text>Coats</Text></Link>
            <Link to='/men/beach-wear'><Text>Beach Wear</Text></Link>
            <Link to='/men/sweaters'><Text>Sweaters</Text></Link>
            <Link to='/men/shorts'><Text>Shorts</Text></Link>
            <Link to='/men/jeans'><Text>Jeans</Text></Link>
        </Flex>
        </>
    )
}