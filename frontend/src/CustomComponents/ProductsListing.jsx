import { Box, Image, SimpleGrid, Text} from "@chakra-ui/react";
import ProgressLoader from "./Progress";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AddToWishListData } from "../Fetch/Fetch";

export default function ProductsListing ({data,isLoading,isError}) {
    const handleAddToWish = (image,title,price,category,description,type) =>{
        const payload = {
            image,
            title,
            price,
            category,
            description,
            type
        }
        return AddToWishListData(payload).then((res)=>{
            console.log(res,'POST')
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
                    <Text onClick={( )=>handleAddToWish(elem.image,elem.title,elem.price,elem.category,elem.description,elem.type)}><AiOutlineHeart/></Text>
                    <Link to={`/product/${elem._id}`}><Image src={elem.image} width={{base :'130px', md: '150px'}} m='auto' onClick={( ) => handleAddToSinglePage(elem)}/></Link>
                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Title : {elem.title}</Text>
                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Price : {elem.price}</Text>
                </Box>
            })}
        </SimpleGrid>
        </>
        )
}