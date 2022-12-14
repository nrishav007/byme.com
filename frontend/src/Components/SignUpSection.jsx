import { Button } from "@chakra-ui/button";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function SignUpSection ( ) {
    return (
        <>
        <Flex direction={{base : 'column', lg:'row'}} gap='20px' width={{base :'95%', lg: '90%'}} m='auto' bg='RGBA(0, 0, 0, 0.04)'>
            <Box> 
                <SimpleGrid columns={[1,3,1,3]} rowGap='10px'>
                    <Box  w={{base :'95%', md : '70%', lg : '95%'}} m={{base : 'auto', lg : '0'}} padding='10px'>
                        <Text fontSize={{base : '55px', md: '60px', lg: '70px'}} fontWeight='550'>1</Text>
                        <Text fontSize={{base :'30px', md : '35px', lg: '35px'}} fontWeight='550'>THE BIGGEST SELECTION</Text>
                        <Text fontSize={{base : '16px', md: '18px', lg : '15px'}} mt='10px'>Shop over 12,000 brands and stores in one place.</Text>
                        <Text fontSize={{base : '16px', md: '18px', lg: '15px'}} mt='10px'>Find exactly what you want with powerful search and personal recommendations.</Text>
                    </Box>

                    <Box  w={{base :'95%' , md : '70%', lg : '95%'}} m={{base : 'auto', lg : '0'}} padding='10px'>
                        <Text fontSize={{base : '55px', md: '60px', lg: '70px'}} fontWeight='550'>2</Text>
                        <Text fontSize={{base :'30px', md : '35px', lg: '35px'}} fontWeight='550'>THE HOTTEST PRODUCTS</Text>
                        <Text fontSize={{base : '16px', md: '18px', lg :'15px'}} mt='10px'>Shop over 12,000 brands and stores in one place.</Text>
                        <Text fontSize={{base : '16px', md: '18px', lg: '15px'}} mt='10px'>Find exactly what you want with powerful search and personal recommendations.</Text>
                    </Box>

                    <Box  w={{base :'95%', md : '70%', lg : '95%'}} m={{base : 'auto', lg : '0'}} padding='10px'>
                        <Text fontSize={{base : '55px', md: '60px', lg: '70px'}} fontWeight='550'>3</Text>
                        <Text fontSize={{base :'30px', md : '35px', lg: '35px'}} fontWeight='550'>THE BEST PRICES</Text>
                        <Text fontSize={{base : '16px', md: '18px', lg: '15px'}} mt='10px'>Shop over 12,000 brands and stores in one place.</Text>
                        <Text fontSize={{base : '16px', md: '18px', lg: '15px'}} mt='10px'>Find exactly what you want with powerful search and personal recommendations.</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box bg='#cafc4f' >
            <Box width={{base :'95%', md: '70%'}} m='auto' bg='#cafc4f' padding='10px'>
                <Text fontSize={{base : '50px', md: '60px'}} fontWeight='550'>SIGN UP FOR SMATTER SHOPPING</Text>
                <Link to='/signup'><Button colorScheme='black' bg='black'>JOIN</Button></Link>
            </Box>
            </Box>
        </Flex>
        </>
    )
}
//#cafc4f