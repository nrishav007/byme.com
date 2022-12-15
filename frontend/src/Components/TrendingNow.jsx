import { Text } from "@chakra-ui/layout";
import CarouselComponent from "../CustomComponents/Carousel";
import {useDispatch,useSelector} from "react-redux"
import { TrendingNowData } from "../Fetch/Fetch";
import { GetTrendingNowFailure, GetTrendingNowRequest, GetTrendingNowSuccess } from "../Redux/Action";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

export default function TrendingNow ( ) {
    const Dispatch = useDispatch( );
    const {isLoading,isError,TrendingNow} = useSelector((store) => {
        return {
            isLoading : store.isLoading,
            isError : store.isError,
            TrendingNow : store.TrendingNow
        }
    });

    const handleTrending = ( ) =>{
        GetTrendingNowRequest( )
        TrendingNowData( ).then((res)=>{
            Dispatch(GetTrendingNowSuccess(res.data))
        })
        .catch((err)=> GetTrendingNowFailure(err))
    }

    useEffect(( ) =>{
        handleTrending( );
    }, [ ]);

    return (
        <>
        <Text textAlign='center' fontSize={{base :'22px', md : '28px', lg : '35px'}} letterSpacing={{base : '2px'}} fontWeight='600' mt={{base  :'20px', md: '30px', lg: '70px'}}>TRENDING NOW</Text>
        <Text align='center'>{isLoading && <Spinner size='lg' thickness="4px"/>}</Text>
        <Text align='center'>{isError && 'Ooops!! Something Went Wrong'}</Text>
        <CarouselComponent data={TrendingNow} itemsBase={2} itemsMd={3} itemsLg={4}/>
        </>
    )
}