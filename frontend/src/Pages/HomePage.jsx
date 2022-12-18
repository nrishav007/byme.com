import { Box, Text} from "@chakra-ui/layout";
import { useEffect } from "react";
import BreakOutBrands from "../Components/BreakOutBrands";
import Footer from "../Components/Footer";
import HotRightNow from "../Components/HotRightNow";
import MostWanted from "../Components/MostWanted";
import Navbar from "../Components/Navbar";
import SignUpSection from "../Components/SignUpSection";
import TrendingNow from "../Components/TrendingNow";
import Slideshow from "../CustomComponents/SideShow";
import { HomeSildeShowData } from "../Fetch/Fetch";
import {useDispatch,useSelector} from 'react-redux'
import { GetHomeSlideShowFailure, GetHomeSlideShowRequest, GetHomeSlideShowSuccess } from "../Redux/Action";
import HomeMainBodyComponent from "../Components/HomeMainBody";
import HomeMainBodyComponent1 from "../Components/HomeMainBody1";
import ProgressLoader from "../CustomComponents/Progress";
import { useContext } from "react";
import { AuthContext } from "../context/AppContext";

export default function HomePage ( ) {
    const Dispatch = useDispatch( );
    const {user_Auth} = useContext(AuthContext)
    const {HomeSlideShow,isLoading,isError} = useSelector((store) =>{
        return {
            HomeSlideShow : store.HomeSlideShow,
            isError : store.isError,
            isLoading : store.isLoading
        }
    })

    const handleSlideShow = ( ) =>{
        GetHomeSlideShowRequest( )
        HomeSildeShowData( ).then((res)=>{
            Dispatch(GetHomeSlideShowSuccess(res.data))
        })
        .catch((err)=>Dispatch(GetHomeSlideShowFailure(err)))
    }

    useEffect(( ) =>{
        handleSlideShow( );
    }, [ ])

    return (
        <>
        <Navbar/>
        <Box height={'100px'}></Box>
        <Box>
            {isLoading && <ProgressLoader size='xs' colorScheme='black'/>}
            <Text align='center'>{isError && 'Ooops!! Something Went Wrong'}</Text>
            <Slideshow data={HomeSlideShow} cwithBase='95%' cwidthMd='90%' cwidthLg='95%' ImageWBase='90%' ImageWMd='95%' ImageWLg='95%'/>
        </Box>

        <Box mt={{base : '20px', md : '40px', lg : '80px'}}>
            <HomeMainBodyComponent/>
            <HomeMainBodyComponent1/>
            <BreakOutBrands/>
            <TrendingNow/>
            <HotRightNow/>
        </Box>

        <Box>
            <MostWanted/>
        </Box>

        <Box mt={{base : '40px', md : '50px', lg: '120px'}}>
            <SignUpSection/>
        </Box>

        <Box mt={{base :'40px'}}>
            <Footer/>
        </Box>      
        </>
    )
}