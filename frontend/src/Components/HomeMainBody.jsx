import { Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import CarouselComponent from "../CustomComponents/Carousel";
import { HomeMainBodyData } from "../Fetch/Fetch";
import { GetHomeMainBodyFailure, GetHomeMainBodyRequest, GetHomeMainBodySuccess } from "../Redux/Action";

export default function HomeMainBodyComponent ( ) {
    const Dispatch = useDispatch( );
    const {HomeMainBody,isLoading,isError} = useSelector((store) =>{
        return {
            HomeMainBody : store.HomeMainBody,
            isError : store.isError,
            isLoading : store.isLoading
        }
    })

    const HandleMainBody = ( ) =>{
        Dispatch(GetHomeMainBodyRequest( ))
        HomeMainBodyData( ) .then((res)=>{
            Dispatch(GetHomeMainBodySuccess(res.data))
        })
        .catch((err) => Dispatch(GetHomeMainBodyFailure(err)))
    }

    useEffect(( ) =>{
        HandleMainBody( );
    }, [ ])
    return (
        <>
        <Text align='center'>{isLoading && <Spinner size='lg' thickness="4px"/>}</Text>
        <Text align='center'>{isError && 'Ooops!! Something Went Wrong'}</Text>
         <CarouselComponent data={HomeMainBody} itemsBase={2} itemsMd={3} itemsLg={4}/>
        </>
    )
}