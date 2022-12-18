import { Box, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import ProgressLoader from "./Progress";
import { useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";

import { AddToWishListData } from "../Fetch/Fetch";


   

export default function ProductsListing({ data, isLoading, isError }) {
  const Toast = useToast();

  const handleAddToWish = (
    image,
    title,
    price,
    category,
    description,
    type,
    _id
  ) => {
    const payload = {
      productID: _id,
      image,
      title,
      price,
      category,
      description,
      type,
    };
    return AddToWishListData(payload)
      .then((res) => {
        Toast({ position: "top", title: res.data.msg, status : res.data.msg === 'Product Added to wishlist' ? "success" : "error"});
      })
      .catch((err) => console.log(err));
  };

    return (
        <>
        {isLoading && <ProgressLoader size='sm'  colorScheme='black'/>}
        <Text textAlign='center'>{isError && 'Oops!! Something  Went Wrong'}</Text>
        <SimpleGrid columns={[2,2,3,4]}  width={{base : '95%'}} m='auto' rowGap={{base : '20px', lg: '50px'}} columnGap={{base :'20px', lg : '30px'}}>
            {data.length > 0 && data.map((elem)=>{
                return <Box  padding='10px' key={elem._id}>
                    <Link to={`/product/single/${elem._id}`}><Image  src={elem.image} width={{base :'130px', md: '150px', lg :'200px'}} m='auto' shadow='md' padding='10px'/></Link>
                    <Text fontSize={{base : '12px', md: '15px'}} fontWeight='550' align='center' mt='10px'>{elem.title}</Text>
                    <Text fontSize={{base : '12px', md: '15px'}} fontWeight='550' align='center'>{elem.price}</Text>
                    <Text mt='10px' fontSize={{base : '12px', md: '15px'}} fontWeight='600' onClick={( )=>handleAddToWish(elem.image,elem.title,elem.price,elem.category,elem.description,elem.type,elem._id)} align='center'  _hover={{"color" : "white", bg : 'black'}} borderRadius='10px' cursor='pointer'>WishList </Text>
                </Box>
            })}
        </SimpleGrid>
        </>
        )
}

