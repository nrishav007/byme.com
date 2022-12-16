import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import {AiFillDelete} from "react-icons/ai"
import { DeleteWishList, GetWishListData } from "../Fetch/Fetch";
import ProgressLoader from "../CustomComponents/Progress";

export default function WishlistPage ( ) {
    const [wish,SetWish] = useState([ ]);
    const [isLoading,setloading] = useState(false)

    const handleWislist = ( ) =>{
        setloading(true)
        GetWishListData( ).then((res)=>{
            SetWish(res.data)
            setloading(false)
        })
    };

    const handleDelete = (id)=>{
        return DeleteWishList(id).then((res)=>{
            SetWish(res.data)
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
        <SimpleGrid columns={[2,2,3,6]}  width={{base : '95%'}} m='auto' rowGap={{base : '20px', lg: '50px'}} columnGap={{base :'20px', lg : '30px'}}>
            {wish.length > 0 && wish.map((elem)=>{
                return <Box  padding='10px' lineHeight={{base : '30px'}} key={elem._id}>
                    <Image src={elem.image} width={{base :'130px', md: '150px'}} m='auto'/>
                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Title : {elem.title}</Text>
                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Price : {elem.price}</Text>
                    <Text onClick={( )=> DeleteFromWish(elem._id)} align='center' cursor='pointer'>Remove</Text>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}