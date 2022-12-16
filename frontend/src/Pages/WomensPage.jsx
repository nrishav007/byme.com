import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import WomensAllClothing from "../Components/WomensAllClothing";
import TopSection from "../CustomComponents/WomensTopSection";

export default function WomensPage ( ) {
    return (
        <>
        <TopSection/>
        <Box width={{base : "80%", md: '70%', lg : '60%'}} m='auto' mt={{base : '10px', md: '20px', lg: '30px'}}>
            <Image m='auto' src='https://cdna.lystit.com/static/n/static-img/brand-ads/gucci-2b0c2682-47b4-49dc-bf75-abc3d285e122.o.jpg'/>
        </Box>

        <Box>
            <WomensAllClothing/>
        </Box>

        <Box>
            <Footer/>
        </Box>
        </>
    )
}