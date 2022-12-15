import { Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import CarouselComponent from "../CustomComponents/Carousel";
import { HomeMainBody1Data } from "../Fetch/Fetch";
import { GetHomeMainBody1Failure, GetHomeMainBody1Request, GetHomeMainBody1Success } from "../Redux/Action";

export default function HomeMainBodyComponent1 ( ) {
    const Dispatch = useDispatch( );
    const {HomeMainBody1,isLoading,isError} = useSelector((store) =>{
        return {
            HomeMainBody1 : store.HomeMainBody1,
            isError : store.isError,
            isLoading : store.isLoading
        }
    })

    const HandleMainBody = ( ) =>{
        Dispatch(GetHomeMainBody1Request( ))
        HomeMainBody1Data( ) .then((res)=>{
            Dispatch(GetHomeMainBody1Success(res.data))
        })
        .catch((err) => Dispatch(GetHomeMainBody1Failure(err)))
    }

    useEffect(( ) =>{
        HandleMainBody( );
    }, [ ])
    return (
        <>
        <Text align='center'>{isLoading && <Spinner size='lg' thickness="4px"/>}</Text>
        <Text align='center'>{isError && 'Ooops!! Something Went Wrong'}</Text>
         <CarouselComponent data={HomeMainBody1} itemsBase={2} itemsMd={3} itemsLg={4}/>
        </>
    )
}