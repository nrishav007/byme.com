import { Box, Image, Progress, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFoundPage ( ) {
    return (
        <>
        <Box width={{base :'40%', md :'60%',lg: '30%'}} m='auto'>
            <Image m='auto' src="https://user-images.githubusercontent.com/103938174/207255846-af9cb166-99dd-415a-9ef1-7e8dbabebaf8.png"/>
        </Box>
        <Progress size='sm' isIndeterminate colorScheme='black' />
        <Text fontSize={{base: '16px', md :'18px', lg :'20px'}} textAlign='center' letterSpacing={{base :'2px'}} fontWeight='550' mt={{base:'10px'}}>LOOK'S LIKE YOU ARE LOST</Text>
        <Text fontSize={{base: '16px', md :'18px', lg :'20px'}} textAlign='center' letterSpacing={{base :'2px'}} fontWeight='550' mt={{base:'10px'}}>FIND A WAY !!!</Text>
        <Link to='/' textAlign='center' mt={{base:'40px'}}><Text decoration="underline" align='center'>www.buyme.com</Text></Link>
        </>
    )
}