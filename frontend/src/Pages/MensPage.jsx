import { Box    } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import MensAllClothing from "../Components/MensAllClothing";
import MensTopSection from "../CustomComponents/MensTopSection";
import Footer from "../Components/Footer"

export default function MensPage ( ) {
    return (
        <>
        <MensTopSection/>

        <Box width={{base : "70%", md: '70%', lg : '60%'}} m='auto' mt={{base : '10px', md: '20px', lg: '30px'}}>
            <Image m='auto' src='https://cdna.lystit.com/static/n/static-img/brand-ads/stoneisland-d27ec2df-7ab3-4034-867c-6a239fca26cb.o.jpg'/>
        </Box>

        <MensAllClothing/>

        <Footer/>
        </>
    )
}