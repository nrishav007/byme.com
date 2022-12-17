import { Button, Flex } from "@chakra-ui/react"
import {GrPrevious, GrNext} from 'react-icons/gr'
import {BiLastPage,BiFirstPage} from "react-icons/bi"

export default function Pagination ({current,onChange}){    
    return (
        <>
        <Flex w={{base : '30%', md : '20%', lg : '10%'}} m='auto' justifyContent='space-between' mt={{base : '20px'}} fontSize={{base : '20px'}} color='white' paddingBottom='20px'>
        <Button onClick={( ) => onChange(current-1)} disabled={current===1}  size={{base : 'sm', md : 'md'}}   colorScheme='black' bg='black' color='white'><BiFirstPage/></Button>
       <Button onClick={( ) => onChange(current+1)} disabled={current === 7}  size={{base : 'sm', md : 'md'}}  colorScheme='black' bg='black' color='white' ><BiLastPage/></Button>
        </Flex>
        </>
    )
}   