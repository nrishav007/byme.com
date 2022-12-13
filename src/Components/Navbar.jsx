import {Box,Flex,IconButton,useDisclosure,Stack,Text,Image,Input} from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {BsSearch} from "react-icons/bs"

export default function Navbar( ) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Box px={4}  className='ChackraNavBar' shadow='lg' borderBottom={{base : '0px', md :'1px solid black'}} padding='10px'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
              
            <Flex width={{base : "20%", md :'13%', lg : '10%'}} justifyContent={'center'} >
             <Link to='/'><Image src='https://user-images.githubusercontent.com/103938174/207255846-af9cb166-99dd-415a-9ef1-7e8dbabebaf8.png' width='100px' m='auto'/></Link>
            </Flex>

              <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '90%', lg : '95%'}} justifyContent='space-around' alignItems='center' padding='10px'>
               
               <Flex width={{base : 0, md : "20%", lg :'10%'}} justifyContent='space-around' >
               <Link to="/men"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>MEN</Text></Link>
               <Link to="/women"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>WOMEN</Text></Link>
               </Flex>

               <Flex width={{base : '0', md : '60%', lg :'75%'}} border={'1px solid black'} padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input borderRadius='0px' border='0px' placeholder='Search' variant="unstyled" padding='5px'/>
               </Flex>

               <Flex width={{base : "", md  : '20%', lg :'10%'}} justifyContent='space-between'>
               <Link to="/signup"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>SIGN UP</Text></Link>
               <Link to="/login"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>LOGIN</Text></Link>
              </Flex>

              </Flex>
          </Flex> 
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} >
              <Stack as={'nav'} spacing={4}>
                  <Link to='/men'><Text>MEN</Text></Link>
                  <Link to='/women'><Text>WOMEN</Text></Link>
                  <Link to='/sginup'><Text>SIGN UP</Text></Link>
                  <Link to='/login'><Text>LOG IN</Text></Link>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }