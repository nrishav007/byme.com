import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Flex,

} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const DummyData=()=>{
    const [name, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone,setPhone]= useState("");
const [address,setAddress] = useState("");

const handleSubmit=(e)=>{
    e.preventDefault()
    const payload={
        name,email,phone,address,
    }
}
return(
   
    <Box
      bgImage="url(https://i.ibb.co/k0JL8gg/vecteezy-clothing-store-customers-are-choosing-clothes-and-a-staff-is-4145772.jpg)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      Size="100%"
      >
        <Navbar/>
        <br/>
        <Box
          align="center"
          color="white"
          fontFamily="Montserrat - 700"
          fontSize="36px"
          fontWeight="700"
          fontStyle="normal"
          display="block"
        >
          {/* <img
            style={{ height: "95px" }}
            src="https://user-images.githubusercontent.com/103938174/207255846-af9cb166-99dd-415a-9ef1-7e8dbabebaf8.png"
            alt="bymeicon"
          /> */}
        </Box>
        <Flex align="center"  justify="center" m={"auto"} h="100vh" w={["96%","65%","45%"]}>
          <Box bg="white" p={39} rounded="md" textAlign={"center"}>
            <Heading variant={"solid"}>User Details</Heading>

            {/* ..............................................................Starting of form data */}
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl>
            <FormLabel htmlFor="name" variant={"smooth"}>
                  Name
                </FormLabel>
               <Input
                  isInvalid
                  errorBorderColor="black"
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Enter your name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" variant={"smooth"}>
                  Email
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="black"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="phone" variant={"smooth"}>
                  Phone
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="black"
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="address" variant={"smooth"}>
                  Address
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="black"
                  id="address"
                  name="address"
                  type="address"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
                <Button type="submit" bg="black" color="white" width="full">
                 Submit Details
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
        <Footer/>
      </Box>
      
    
  )




}




