import {Box,Flex,IconButton,useDisclosure,Stack,Text,Image,Input, Tooltip} from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {BsSearch} from "react-icons/bs"
import { useContext } from 'react';
import { AuthContext } from '../context/AppContext';
import {FaUserCircle} from "react-icons/fa"
import {BiLogIn} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"

export default function Navbar( ) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {user} = useContext(AuthContext);
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
               <Link to="/men/all-clothing"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>MEN</Text></Link>
               <Link to="/women/all-clothing"><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}>WOMEN</Text></Link>
               </Flex>

               <Flex width={{base : '0', md : '60%', lg :'75%'}} border={'1px solid black'} padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input borderRadius='0px' border='0px' placeholder='SEARCH' variant="unstyled" padding='5px'/>
               </Flex>

               <Flex width={{base : "", md  : '20%', lg :'10%'}} justifyContent='space-around' fontSize='25px'>
               <Tooltip bg='#CBD5E0' color='black' label='Sing Up'><Link to="/signup"><Text><BiLogIn/></Text></Link></Tooltip>
               <Tooltip bg='#CBD5E0' color='black' label='Wishlist'><Link to="/wishlist"><Text><AiOutlineHeart/></Text></Link></Tooltip>
              <Tooltip bg='#CBD5E0' color='black' label={user.displayName ? user.displayName : 'Profile'}><Link to={user.displayName ? '/' : '/login'}><Text><FaUserCircle/></Text></Link></Tooltip>
              </Flex>
              </Flex>
          </Flex> 
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} >
              <Stack as={'nav'} spacing={4}>
                  <Link to='/men/all-clothing'><Text>MEN</Text></Link>
                  <Link to='/women/all-clothing'><Text>WOMEN</Text></Link>
                  <Link to='/wishlist'><Text>WISHLIST</Text></Link>
                  <Link to='/sginup'><Text>SIGN UP</Text></Link>
                  <Link to='/login'><Text>LOG IN</Text></Link>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }