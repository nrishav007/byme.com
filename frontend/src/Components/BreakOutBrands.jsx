import { Text } from "@chakra-ui/layout";
import CarouselComponent from "../CustomComponents/Carousel";
import {useDispatch,useSelector} from 'react-redux'
import { BreakOutBrandsData } from "../Fetch/Fetch";
import { GetBreakoutBrandsFailure, GetBreakoutBrandsRequest, GetBreakoutBrandsSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

export default function BreakOutBrands ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,BreakOutBrands} = useSelector((store) => {
        return {
            isLoading : store.isLoading,
            isError : store.isError,
            BreakOutBrands : store.BreakOutBrands
        }
    })

    const handleBreakOutBrands = ( ) =>{
        GetBreakoutBrandsRequest( )
        BreakOutBrandsData( ).then((res)=>{
            Dispatch(GetBreakoutBrandsSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetBreakoutBrandsFailure(err)))
    }

    useEffect(( ) =>{
        handleBreakOutBrands( );
    }, [ ])

    return (
        <>
        <Text textAlign='center' fontSize={{base :'22px', md : '28px', lg : '35px'}} letterSpacing={{base : '2px'}} fontWeight='600' mt={{base  :'20px', md: '30px', lg: '70px'}}>BREAKOUT BRANDS</Text>
        <Text align='center'>{isLoading && <Spinner size='lg' thickness="4px"/>}</Text>
        <Text align='center'>{isError && 'Oops!! Something Really Went Wrong'}</Text>
        <CarouselComponent data={BreakOutBrands} itemsBase={2} itemsMd={3} itemsLg={4}/>
        </>
    )
}