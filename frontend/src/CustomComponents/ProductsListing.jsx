import { Box, Image, SimpleGrid, Text, useToast} from "@chakra-ui/react";
import ProgressLoader from "./Progress";
import {useSelector} from "react-redux"
import { useNavigate,Link, useParams } from 'react-router-dom';


export default function ProductsListing ({data,isLoading,isError}) {
      const navigate = useNavigate()   ;


import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AddToWishListData } from "../Fetch/Fetch";

export default function ProductsListing ({data,isLoading,isError}) {
    const Toast = useToast( );
    
    const handleAddToWish = (image,title,price,category,description,type,_id) =>{
        const payload = {
            productID : _id,
            image,
            title,
            price,
            category,
            description,
            type
        }
        return AddToWishListData(payload).then((res)=>{
            Toast({position : "top", title : "Added To Wishlist"})
        })
        .catch((err)=> console.log(err))
    }

    return (
        <>
        {isLoading && <ProgressLoader size='sm'  colorScheme='black'/>}
        <Text textAlign='center'>{isError && 'Oops!! Something  Went Wrong'}</Text>
        <SimpleGrid columns={[2,2,3,6]}  width={{base : '95%'}} m='auto' rowGap={{base : '20px', lg: '50px'}} columnGap={{base :'20px', lg : '30px'}}>
            {data.length > 0 && data.map((elem)=>{
                return <Box  padding='10px' lineHeight={{base : '30px'}} key={elem._id}>

                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Title : {elem.title}</Text>
                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Price : {elem.price}</Text>
                </Box>
            })}
        </SimpleGrid>
        </>
        )
}