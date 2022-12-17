// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   VStack,
//   Flex,

// } from "@chakra-ui/react";
// import PhoneInput from "react-phone-number-input";

// import { useState,useContext } from "react";
// import { AuthContext } from "../context/AppContext";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";

// export const DummyData=()=>{
//     const {setUpCaptcha}=useContext(AuthContext)
//
//     const [error, setError] = useState("");
//     const [result, setResult] = useState("");
//     const [temp, setTemp] = useState(false);
//     const [loading, setLoading] = useState(false);

// const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (phone === "" || phone === undefined) {
//       return setError("Please enter a valid phone number!");
//     }
//     try {
//       const res = await setUpCaptcha(phone);
//       console.log(res);
//       setResult(res);

//       setTemp(true);
//     } catch (err) {
//       setError(err.message);
//     }
//     console.log(phone);
//   };

//   const varifyOTP = async (e) => {
//     e.preventDefault();
//     console.log(otp);
//     setLoading(true);
//     if (otp === "" || otp === null) return;
//     try {
//       setLoading(true);
//       setError("");
//       await result.confirm(otp);
//       navigate("/dashboard");
//       setLoading(false);
//     } catch (err) {
//       setError(err.mesage);
//       setLoading(false);
//     }
//   };

//   const skeletonFunction = () => {
//     // setLoading(true)
//     setTimeout(() => {
//       // setLoading(true)
//       navigate("/login");
//     }, 3000);
//     // setLoading(false)
//   };
//   if (loading) {
//     return (
//       <>
//       <Spinner
//         thickness="4px"
//         speed="0.65s"
//         emptyColor="gray.200"
//         color="blue.500"
//         // position={"center"}
//         margin={"auto"}
//         size="xl"
//         position={"absolute"}
//         ml="50%"
//         mt="25%"
//       />
//       {/* <Skeleton>
//          <Box w={"100%"} minHeight={"100%"}>&nbsp;</Box>
//       </Skeleton> */}
//       <Skeleton height={"100vh"} position={"relative"} ></Skeleton>
//       </>
//     );
//   }

// const handleSubmit=(e)=>{
//     e.preventDefault()
//     const payload={
//         name,email,phone,address,
//     }
// }
// return(

//     <Box
//       bgImage="url(https://i.ibb.co/k0JL8gg/vecteezy-clothing-store-customers-are-choosing-clothes-and-a-staff-is-4145772.jpg)"
//       bgPos="center"
//       bgRepeat="no-repeat"
//       bgSize="100%"
//       Size="100%"
//       >
//         <Navbar/>
//         <br/>
//         <Box
//           align="center"
//           color="white"
//           fontFamily="Montserrat - 700"
//           fontSize="36px"
//           fontWeight="700"
//           fontStyle="normal"
//           display="block"
//         >
//           {/* <img
//             style={{ height: "95px" }}
//             src="https://user-images.githubusercontent.com/103938174/207255846-af9cb166-99dd-415a-9ef1-7e8dbabebaf8.png"
//             alt="bymeicon"
//           /> */}
//         </Box>
//         <Flex align="center"  justify="center" m={"auto"} h="100vh" w={["96%","65%","45%"]}>
//           <Box bg="white" p={39} rounded="md" textAlign={"center"}>
//             <Heading variant={"solid"}>User Details</Heading>

//             {/* ..............................................................Starting of form data */}
//             <form onSubmit={handleSubmit}>
//               <VStack spacing={4} align="flex-start">
//               <FormControl>
//             <FormLabel htmlFor="name" variant={"smooth"}>
//                   Name
//                 </FormLabel>
//                <Input
//                   isInvalid
//                   errorBorderColor="black"
//                   id="name"
//                   name="name"
//                   type="name"
//                   placeholder="Enter your name"
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormLabel htmlFor="email" variant={"smooth"}>
//                   Email
//                 </FormLabel>
//                 <Input
//                   isInvalid
//                   errorBorderColor="black"
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormLabel htmlFor="phone" variant={"smooth"}>
//                   Phone
//                 </FormLabel>
//                 <Input
//                   isInvalid
//                   errorBorderColor="black"
//                   id="phone"
//                   name="phone"
//                   type="number"
//                   placeholder="Phone Number"
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormLabel htmlFor="address" variant={"smooth"}>
//                   Address
//                 </FormLabel>
//                 <Input
//                   isInvalid
//                   errorBorderColor="black"
//                   id="address"
//                   name="address"
//                   type="address"
//                   placeholder="Address"
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </FormControl>
//                 <Button type="submit" bg="black" color="white" width="full">
//                  Submit Details
//                 </Button>
//               </VStack>
//             </form>
//           </Box>
//         </Flex>
//         <Footer/>
//       </Box>

//   )

// }
import "./phoneInput.css";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  PinInput,
  PinInputField,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useContext } from "react";
import { AuthContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
// import { async } from "@firebase/util";

export const DummyData = () => {
  const navigate = useNavigate();
  const { setUpCaptcha } = useContext(AuthContext);
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [temp, setTemp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined) {
      return setError("Please enter a valid phone number!");
    }
    try {
      const res = await setUpCaptcha(number);
      console.log(res);
      setResult(res);

      setTemp(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  const varifyOTP = async (e) => {
    e.preventDefault();
    console.log(otp);
    setLoading(true);
    if (otp === "" || otp === null) return;
    try {
      setLoading(true);
      setError("");
      await result.confirm(otp);
      navigate("/");
      setLoading(false);
    } catch (err) {
      setError(err.mesage);
      setLoading(false);
    }
  };

  const skeletonFunction = () => {

    setTimeout(() => {
    
      navigate("/login");
    }, 3000);
  
  };
  if (loading) {
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          margin={"auto"}
          size="xl"
          position={"absolute"}
          ml="50%"
          mt="25%"
        />
        <Skeleton height={"100vh"} position={"relative"}></Skeleton>
      </>
    );
  } else {
    return (
      <>
        <Box
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          w={"30%"}
          p={"6"}
          m={"auto"}
          mt={"36"}
        >
          <form
            onSubmit={handleOtpSubmit}
            style={{ display: !temp ? "block" : "none" }}
          >
            <FormControl isRequired>
              <Heading textAlign={"center"} mb={"4"}>
                UserDetails
              </Heading>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
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
              <Box>
                <FormControl isRequired>
                <FormLabel>Mobile No.</FormLabel>
                <PhoneInput
                  defaultCountry="IN"
                  value={number}
                  onChange={setNumber}
                  placeholder="Enter Phone Number"
                />
                </FormControl>
              </Box>
            
              <Box id="recaptcha-container"></Box>
            </FormControl>
            
            <Box
              mt={2}
              w={"100%"}
              textAlign={"center"}
              display={"flex"}
              gap={"2rem"}
              justifyContent={"right"}
            >
              <Link to="/login">
                <Button mt={4} colorScheme="red" type="submit">
                  Cancel
                </Button>
              </Link>
              <Button mt={4} colorScheme="teal" type="submit">
                Send OTP
              </Button>
            </Box>
          </form>

          <form
            onSubmit={varifyOTP}
            style={{ display: temp ? "block" : "none" }}
          >
            <FormControl isRequired>
              <Heading textAlign={"center"} mb={"4"}>
                Enter OTP
              </Heading>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              <Box>
                <FormLabel>OTP</FormLabel>
                <PinInput onChange={(e) => setOtp(e)} otp>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </Box>
            </FormControl>
            <Box
              mt={2}
              w={"100%"}
              textAlign={"center"}
              display={"flex"}
              gap={"2rem"}
              justifyContent={"right"}
            >
              <Button
                onClick={skeletonFunction}
                mt={4}
                colorScheme="red"
                type="submit"
              >
                Cancel
              </Button>

              <Button mt={4} colorScheme="teal" type="submit">
                Verify OTP
              </Button>
            </Box>
          </form>
        </Box>
      </>
    );
  }
};
