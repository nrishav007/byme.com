import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function MensPage ( ) {
    return (
        <>
        <Navbar/>
        <Box height={'85px'}></Box>
        <Flex borderBottom='1px solid black' justifyContent='space-around' fontSize={{base : '10px', md: '15px', lg :'15px'}} padding={{base : '10px', md :'15px',lg :'10px'}} textAlign={{base :'center', md :'left'}}>
            <Link to='/mens/allclothing'><Text _selected={{"color" : "red"}}>All Clothing</Text></Link>
            <Link to='/mens/coats'><Text>Coats</Text></Link>
            <Link to='/mens/dresses'><Text>Dresses</Text></Link>
            <Link to='/mens/hosiery'><Text>Hosiery</Text></Link>
            <Link to='/mens/jackets'><Text>Jackets</Text></Link>
            <Link to='/mens/jeans'><Text>Jeans</Text></Link>
        </Flex>

        <Box width={{base : "70%", md: '70%', lg : '60%'}} m='auto' mt={{base : '10px', md: '20px', lg: '30px'}}>
            <Image m='auto' src='https://cdna.lystit.com/static/n/static-img/brand-ads/stoneisland-d27ec2df-7ab3-4034-867c-6a239fca26cb.o.jpg'/>
        </Box>
        </>
    )
}