import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ProgressLoader from "./Progress";

export default function ProductsListing ({data,isLoading,isError}) {
 
    return (
        <>
        {isLoading && <ProgressLoader size='sm'  colorScheme='black'/>}
        <SimpleGrid columns={[2,2,3,6]}  width={{base : '95%'}} m='auto' rowGap={{base : '20px', lg: '50px'}} columnGap={{base :'20px', lg : '30px'}}>
            {data.length > 0 && data.map((elem)=>{
                return <Box  padding='10px' lineHeight={{base : '30px'}} key={elem._id}>
                    <Image src={elem.image} width={{base :'130px', md: '150px'}} m='auto'/>
                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Title : {elem.title}</Text>
                    <Text fontSize={{base : '14px', md: '15px'}} fontWeight='550' align='center'>Price : {elem.price}</Text>
                </Box>
            })}
        </SimpleGrid>
        </>
        )
}