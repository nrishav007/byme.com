import React from "react"
import {Box,Flex,IconButton,useDisclosure,Stack,Text,Image,Tooltip} from '@chakra-ui/react';
import {Link, Navigate} from "react-router-dom"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { useContext } from 'react';
import { AuthContext } from '../context/AppContext';
import {BiLogIn,BiLogOut} from "react-icons/bi"
import AdminProducts from "./Products";


 export const Admin = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = ( ) =>{
      logOut( )
    }

    const handleCheck = ( ) =>{
      if(user.displayName === undefined) 
      {
        <Navigate to='/login'/>
      }
      else{
        handleLogOut( );
      }
    }

    return (
        <>
<Box px={4} mb={20} className='ChackraNavBar' shadow='lg' borderBottom={{base : '0px', md :'1px solid black'}} padding='10px' bg='#1A365D' color='white'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
              
            <Flex width={{base : "20%", md :'13%', lg : '10%'}} justifyContent={'center'} >
             <Link to='/'><Image src='https://user-images.githubusercontent.com/103938174/207255846-af9cb166-99dd-415a-9ef1-7e8dbabebaf8.png' width='100px' m='auto'/></Link>
            </Flex>

              <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '90%', lg : '95%'}} justifyContent='space-around' alignItems='center' padding='10px'>
               <Flex width={{base : 0, md : "20%", lg :'90%'}} justifyContent='space-around'>
               <Link><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}}  letterSpacing='2px'>PRODUCTS</Text></Link>
               <Link><Text _hover={{borderBottom : "1px solid black", fontWeight : "550"}} letterSpacing='2px'>USERS</Text></Link>
               </Flex>

               <Flex width={{base : "", md  : '25%', lg :'15%'}} justifyContent='space-around' fontSize='25px'>
               <Tooltip bg='#CBD5E0' color='black' label={user?.displayName === undefined ? 'Sign Up' : 'Log Out'}><Link to={user?.displayName === undefined ? '/login' : '/'} ><Text onClick={handleCheck}>{user?.displayName === undefined ? <BiLogIn/> : <BiLogOut/>}</Text></Link></Tooltip>
              </Flex>
              </Flex>
          </Flex> 
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} >
              <Stack as={'nav'} spacing={4}>
                  <Link><Text>PRODUCTS</Text></Link>
                  <Link><Text>USERS</Text></Link>
              </Stack>
            </Box>
          ) : null}
        </Box>

        <Box h='120px'></Box>

        <AdminProducts/>

        </>
    )
}