import { Text } from "@chakra-ui/layout";
import CarouselComponent from "../CustomComponents/Carousel";

export default function BreakOutBrands ( ) {
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
    return (
        <>
        <Text textAlign='center' fontSize={{base :'22px', md : '28px', lg : '35px'}} letterSpacing={{base : '2px'}} fontWeight='600' mt={{base  :'20px', md: '30px', lg: '70px'}}>BREAKOUT BRANDS</Text>
        <CarouselComponent data={data} itemsBase={2} itemsMd={3} itemsLg={4}/>
        </>
    )
}