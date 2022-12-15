import { Text } from "@chakra-ui/layout";
import CarouselComponent from "../CustomComponents/Carousel";
import {useDispatch,useSelector} from "react-redux"
import { HotRightNowData } from "../Fetch/Fetch";
import { GetHotNowFailure, GetHotNowRequest, GetHotNowSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

export default function HotRightNow ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,HotNow} = useSelector((store) => {
        return {
            isLoading : store.isLoading,
            isError : store.isError,
            HotNow : store.HotNow
        }
    });

    const HandleHotData = ( ) =>{
        Dispatch(GetHotNowRequest( ))
        HotRightNowData( ).then((res)=>{
            Dispatch(GetHotNowSuccess(res.data))
        })
        .catch((err)=> Dispatch(GetHotNowFailure(err)))
    }

    useEffect(( ) =>{
        HandleHotData( );
    }, [ ]);

    return (
        <>
        <Text textAlign='center' fontSize={{base :'22px', md : '28px', lg : '35px'}} letterSpacing={{base : '2px'}} fontWeight='600' mt={{base  :'20px', md: '30px', lg: '70px'}}>HOT RIGHT NOW</Text>
        <Text align='center'>{isLoading && <Spinner size='lg' thickness="4px"/>}</Text>
        <Text align='center'>{isError && 'Ooops!! Something Went Wrong'}</Text>
        <CarouselComponent data={HotNow} itemsBase={2} itemsMd={3} itemsLg={4}/>
        </>
    )
}