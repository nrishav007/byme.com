import { SimpleGrid, Text } from "@chakra-ui/layout";

export default function MostWanted ( ) {
    return (
        <>
          <Text textAlign='center' fontSize={{base :'22px', md : '28px', lg : '35px'}} letterSpacing={{base : '2px'}} fontWeight='600' mt={{base  :'40px', md: '30px', lg: '70px'}}>MOST WANTED</Text>
          <SimpleGrid columns={[2,2,3,5]} w={{base : '95%', md: '90%'}} m='auto' rowGap='20px' mt={{base :'20px'}}>  
          <Text fontSize={{base: '18px', md: '20px', lg: '22px'}} cursor='pointer' w={{base : '90%', md: '85%', lg: '80%'}} m='auto' fontWeight='500' _hover={{color : "#B794F4"}}>NIKE AIR MAX 90 SNEAKERS</Text>
          <Text fontSize={{base: '18px', md: '20px', lg: '22px'}} cursor='pointer' w={{base : '90%', md: '85%', lg: '80%'}} m='auto' fontWeight='500' _hover={{color : "#B794F4"}}>TORY BURCH ELLA BAGS</Text>
          <Text fontSize={{base: '18px', md: '20px', lg: '22px'}} cursor='pointer' w={{base : '90%', md: '75%', lg: '70 %'}} m='auto' fontWeight='500' _hover={{color : "#B794F4"}}>JEANB BIKER SHORTS</Text>
          <Text fontSize={{base: '18px', md: '20px', lg: '22px'}} cursor='pointer' w={{base : '90%', md: '80%', lg: '80%'}} m='auto' fontWeight='500' _hover={{color : "#B794F4"}}>GUCCI OPHIDIA BAGS</Text>
          <Text fontSize={{base: '18px', md: '20px', lg: '22px'}} cursor='pointer' w={{base : '90%', md: '85%', lg: '80%'}} m='auto' fontWeight='500' _hover={{color : "#B794F4"}}>BALMAN DOUBLE BREASTED BLAZERS</Text>
          </SimpleGrid>
        </>
    )
}