import { Box, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { DeleteWishList, GetWishListData } from "../Fetch/Fetch";
import ProgressLoader from "../CustomComponents/Progress";
import {useDispatch,useSelector} from "react-redux"
import { GetWishListFailure, GetWishListRequest, GetWishListSuccess } from "../Redux/Action";

export default function WishlistPage ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,WishList} = useSelector((store) =>{
        return{
            isLoading : store.isLoading,
            isError : store.isError,
            WishList : store.WishList
        }
    });
    const Toast = useToast( );
    let count = WishList.length;

    const handleWislist = ( ) =>{
        Dispatch(GetWishListRequest( ));
        GetWishListData( ).then((res)=>{
            Dispatch(GetWishListSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetWishListFailure(err)))
    };
    

    const handleDelete = (id)=>{
        return DeleteWishList(id).then((res)=>{
            Toast({position : "top", title : `${res.data.msg}`, status : "success", duration : 3000});   
        })
        .catch((err)=>console.log(err))
    }

    const DeleteFromWish = (id) =>{
        handleDelete(id).then(( )=> handleWislist( ))
    }

    useEffect(( ) =>{
        handleWislist( )
    },[ ])

   
    
    return (
        <>
        <Navbar/>
        <Box height={'90px'}></Box>
        {isLoading && <ProgressLoader size='sm' colorScheme='black'/>}
        <Text align='center' fontSize='18px'>{WishList.length === 0 ? 'WishList Is Empty' : `All Product's ${count}`}</Text>
        <SimpleGrid columns={[2,2,3,6]}  width={{base : '95%'}} m='auto' rowGap={{base : '20px', lg: '50px'}} columnGap={{base :'20px', lg : '30px'}}>
            {WishList.length > 0 && WishList.map((elem)=>{
                return <Box  padding='10px' lineHeight={{base : '30px'}} key={elem._id}>
                    <Image src={elem.image} width={{base :'130px', md: '150px'}} m='auto'/>
                    <Text fontSize={{base : '12px', md: '15px'}} fontWeight='550' align='center'>Title : {elem.title}</Text>
                    <Text fontSize={{base : '12px', md: '15px'}} fontWeight='550' align='center'>Price : {elem.price}</Text>
                    <Text fontSize={{base : '12px', md: '15px'}} align='center' cursor='pointer' _hover={{"color" : "white", bg : 'black'}} borderRadius='10px'>Add To Cart</Text>
                    <Text fontSize={{base : '12px', md: '15px'}} onClick={( )=> DeleteFromWish(elem._id)} align='center' cursor='pointer' _hover={{"color" : "white", bg : 'black'}} borderRadius='10px'>Remove</Text>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}