import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function TopSection ( ) {
    return (
        <>
        <Navbar/>
        <Box height={'85px'}></Box>
        <Flex borderBottom='1px solid black' justifyContent='space-around' fontSize={{base : '10px', md: '15px', lg :'15px'}} padding={{base : '10px', md :'15px',lg :'10px'}} textAlign={{base :'center', md :'left'}}>
            <Link to='/women/all-clothing'><Text>All Clothing</Text></Link>
            <Link to='/women/coats'><Text>Coats</Text></Link>
            <Link to='/women/beach-wear'><Text>Beach Wear</Text></Link>
            <Link to='/women/hosiery'><Text>Hosiery</Text></Link>
            <Link to='/women/jackets'><Text>Jackets</Text></Link>
            <Link to='/women/jeans'><Text>Jeans</Text></Link>
        </Flex>
        </>
    )
}