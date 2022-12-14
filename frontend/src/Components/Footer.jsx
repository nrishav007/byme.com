import { Image } from "@chakra-ui/image";
import { Box, Flex, GridItem, List, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/layout";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer ( ) {
    return (
        <>
        <Box bg='black' color='white' paddingBottom='20px'>
            <SimpleGrid columns={[2,2,3,3]}  width={{base :'95%', md :'90%', lg :'80%'}} m='auto' padding='20px' rowGap='30px'>
                <GridItem padding={'10px'} width={{base :'100%', md :'90%'}} colSpan={{base : '2',md: '1'}}>
                <Flex width={{base :'70%'}}>
                    <Image src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg" width={{base :'150px'}} color='black'/>
                </Flex>

                <Box mt='10px'>
                    <Image src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" width={{base:'150px'}}/>
                    <Text>TrustScore <b>4.4</b></Text>
                    <Text>2,953 reviews</Text>
                    <Flex fontSize={{base :'20px', md: '25px'}} gap='15px' mt='10px'>
                        <BsFacebook/>
                        <BsInstagram/>
                    </Flex>
                </Box>
                </GridItem>

                <Box width={{base :'90%'}}>
                    <Text fontWeight='600'>INTERNATIONAL</Text>
                    <List cursor='pointer' lineHeight='35px'> 
                        <ListItem>BuyME - AU</ListItem>
                        <ListItem>BuyME - CA</ListItem>
                        <ListItem>BuyME - UK</ListItem>
                        <ListItem>BuyME - Osterreich</ListItem>
                        <ListItem>BuyME - Schweiz</ListItem>
                        <ListItem>BuyME - Espana</ListItem>
                        <ListItem>BuyME - France</ListItem>
                        <ListItem>BuyME - Italia</ListItem>
                        <ListItem>BuyME - Belgie</ListItem>
                        <ListItem>BuyME - Nederland</ListItem>
                    </List>
                </Box>

                <Box width={{base :'90%'}}>
                    <Text fontWeight='600'>HELP AND INFO</Text>
                    <List cursor='pointer' lineHeight='35px'> 
                        <ListItem>Help Center</ListItem>
                        <ListItem>About Us</ListItem>
                        <ListItem>BuyME - UK</ListItem>
                        <ListItem>Shipping Policy</ListItem>
                        <ListItem>Privacy Policy</ListItem>
                        <ListItem>Return Policy</ListItem>
                        <ListItem>Return Policy</ListItem>
                        <ListItem>Developers</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>Contact</ListItem>
                        <ListItem>Terms & Conditions</ListItem>
                        <ListItem>Beocome Partner</ListItem>
                        <ListItem>Categories</ListItem>
                    </List>
                </Box>
            </SimpleGrid>
        </Box>
        </>
    )
}