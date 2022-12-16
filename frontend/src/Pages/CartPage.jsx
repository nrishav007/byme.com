import Navbar from "../Components/Navbar"
import {useSelector,useDispatch} from "react-redux"
import { GetCart,DeleteCart} from "../Fetch/Fetch";
import { GetCartFailure, GetCartRequest, GetCartSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Box, Flex, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import ProgressLoader from "../CustomComponents/Progress";
export default function CartPage ( ) {
    const Dispatch = useDispatch( );
    const Toast = useToast( );
    const {isLoading,isError,CartData} = useSelector((s)=>{
        return {
            isLoading : s.isLoading,
            isError : s.isError,
            CartData : s.CartData
        }
    })
    let count = CartData.length;

    const handleCart = ( ) =>{
        Dispatch(GetCartRequest( ));
        GetCart( ).then((res)=>{
            Dispatch(GetCartSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetCartFailure(err)))
    }

    const handleDelete = (id) =>{
      return  DeleteCart(id).then((res)=>{
        Toast({position : "top", title : `${res.data.msg}`, status : "success", duration : 3000});   
        })
        .catch((err)=> console.log(err))
    }

    const DeleteFromCart = (id) =>{
        handleDelete(id).then(( )=> handleCart( ))
    }

    useEffect(( ) =>{
        handleCart( );
    },[ ])

    return (
        <>
        <Navbar/>
        <Box height={'90px'}></Box>
        {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        <Text align='center' fontSize={{base : '16px', md :'18px'}} fontWeight='530' mt='10px'>{CartData.length === 0 ? 'Cart Is Empty' : `All Product's ${count}`}</Text>
        <SimpleGrid columns={[2,2,3,6]}  width={{base : '95%'}} m='auto' rowGap={{base : '20px', lg: '50px'}} columnGap={{base :'20px', lg : '30px'}}>
            {CartData.length > 0 && CartData.map((elem)=>{
                return <Box  padding='10px' lineHeight={{base : '30px'}} key={elem._id}>
                    <Image src={elem.image} width={{base :'130px', md: '150px'}} m='auto'/>
                    <Text fontSize={{base : '12px', md: '15px'}} fontWeight='550' align='center'>{elem.title}</Text>
                    <Text fontSize={{base : '12px', md: '15px'}} fontWeight='550' align='center'>Price : {elem.price}</Text>
                    <Flex justifyContent='space-evenly'>
                    <Text fontSize={{base : '12px', md: '15px'}} onClick={( )=> DeleteFromCart(elem._id)} align='center' cursor='pointer' _hover={{"color" : "white", bg : 'black'}} borderRadius='10px' padding='7px'>Remove</Text>
                    <Text fontSize={{base : '12px', md: '15px'}} align='center' cursor='pointer' _hover={{"color" : "white", bg : 'black'}} borderRadius='10px' padding='7px'>Checkout</Text>
                    </Flex>
                    
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}