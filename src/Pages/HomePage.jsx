import { Box, Text } from "@chakra-ui/layout";
import BreakOutBrands from "../Components/BreakOutBrands";
import HotRightNow from "../Components/HotRightNow";
import Navbar from "../Components/Navbar";
import SignUpSection from "../Components/SignUpSection";
import TrendingNow from "../Components/TrendingNow";
import CarouselComponent from "../CustomComponents/Carousel";
import Slideshow from "../CustomComponents/SideShow";

//dummy check for slideshow 
const colors = [
    {img : "https://cdna.lystit.com/cms/EN_XL_1be4462434.png", id :1}, 
    {img : "https://cdna.lystit.com/cms/YIF_Banner_XL_Desktop_76bdba2aa5.jpg", id : 2}
    ];

// dummy data for main body couresel
    const data = [{
        id : 1,
        image : 'https://cdna.lystit.com/cms/7ec30147_3528_4e96_a650_57ef56b128b0_5904e59d33.png'
    },
    {
        id : 2,
        image : 'https://cdna.lystit.com/cms/1041ba80_6450_45cb_a792_ee2e385ce278_c2537aebbc.png'
    },
    {
        id : 3,
        image : 'https://cdna.lystit.com/cms/51758163_6a58_4e6d_bd8f_dcdb581ddf4f_92d2c86b06.png'
    },
    {
        id : 4,
        image : 'https://cdna.lystit.com/cms/e72b0702_d849_4832_a19d_88d0d0302a66_794aecff7f.png'
    },
    {id : 5,
    image : "https://cdna.lystit.com/cms/9454be62_615f_43d8_8c67_3e2483f5f261_49a452e8e7.png"}
]

export default function HomePage ( ) {
    return (
        <>
        <Navbar/>
        <Box>
            <Slideshow data={colors} cwithBase='95%' cwidthMd='90%' cwidthLg='95%' ImageWBase='90%' ImageWMd='95%' ImageWLg='95%'/>
        </Box>

        <Box mt={{base : '20px', md : '40px', lg : '80px'}}>
            <CarouselComponent data={data} itemsBase={2} itemsMd={3} itemsLg={4}/>
            <CarouselComponent data={data} itemsBase={2} itemsMd={3} itemsLg={4}/>
            <BreakOutBrands/>
            <TrendingNow/>
            <HotRightNow/>
        </Box>

        <Box mt={{base : '40px', md : '50px', lg: '120px'}}>
            <SignUpSection/>
        </Box>
        </>
    )
}