import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    VStack,
    Text,
    Alert,
    useToast
  } from "@chakra-ui/react";
  import {  useContext, useState } from "react";
  
  import { Link,useNavigate } from "react-router-dom";
  import axios from "axios";
  import { FcGoogle } from "react-icons/fc";
  import { BsFacebook } from "react-icons/bs";
  // import { BsApple } from "react-icons/bs";
// import { auth } from "./firebase_config";
import { AuthContext } from "../context/AppContext";
  
  export default function Signup() {
    
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { googleSignIn, facebookSignIn } = useContext(AuthContext);
    const navigateUser=useNavigate()
  
    // const signup = async () => {
    //   try {
    //     const user = await createUserWithEmailAndPassword(auth, email, password);
    //     console.log(user);
    //     console.log(user.email);
    //     console.log(username);
    //     navigateUser("/login");
    //     alert("Welcome ");
    //   } catch (err) {
    //     alert(err.message);
    //   }
    //   if (password.length <= 5) {
    //     alert("Please enter a strong password");
    //   }
    // };
    const toast =useToast()
    const handleSubmit = (e) => {
      e.preventDefault();
      const payload={
        name,
        email,
        password
        
      }
      
      // console.log(payload);
      axios.post("https://coral-perch-cuff.cyclic.app/signup",payload).then((res)=>{
        console.log(res.data);
        toast({
          title:res.data.msg
        })
        if(res.status===200){
          navigateUser("/login")
        }
        else{
          toast({
            title:"Please Signup with correct credentials"
          })
        }
        
      })
      // alert("SIGN UP SUCCESSFULL");
    };
    const handlegoogleSignUp = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        toast({
          title:"Sign Up Successfully"
        })
        navigateUser("/");
      } catch (err) {
        Alert(err.message);
      }
    };
    const handleFacebookSignUp = async (e) => {
      e.preventDefault();
      try {
        await facebookSignIn();
        navigateUser("/profile");
      } catch (err) {}
    };
  
    return (
      <Box
      bgImage="url(https://i.ibb.co/k0JL8gg/vecteezy-clothing-store-customers-are-choosing-clothes-and-a-staff-is-4145772.jpg)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      Size="100%"
      >
        <Box
          align="center"
          color="white"
          fontFamily="Montserrat - 700"
          fontSize="36px"
          fontWeight="700"
          fontStyle="normal"
          h={20}
          display="block"
        >
          <img
            style={{ height: "95px" }}
            src="https://user-images.githubusercontent.com/103938174/207255846-af9cb166-99dd-415a-9ef1-7e8dbabebaf8.png"
            alt="bymeicon"
          />
        </Box>
        <br />
        <br />
        <br />
        <Flex align="center"  justify="center" m={"auto"} h="100vh" w={["96%","65%","45%"]}>
          <Box bg="white" p={39} rounded="md" textAlign={"center"}>
            <Heading variant={"solid"}>CREATE ACCOUNT</Heading>
            <Text variant={"ghost"}>Continue with</Text>
            <br />
            <Box direction={{ base: 'column', md: 'column',lg:'row' }}>
              <Flex gap={4} justifyContent="center">
                <Box>
                  <Button
                    variant="outline"
                    colorScheme={"#50b6ff"}
                    onClick={handlegoogleSignUp}
                  >
                    <FcGoogle />
                  </Button>
                 
                </Box>
                <Button onClick={handleFacebookSignUp} variant="outline" colorScheme={"#50b6ff"}>
                  <BsFacebook />
                </Button>
                <Box>
                </Box>
              </Flex>
              <br />
              <Text variant={"ghost"}>Or</Text>
            </Box>
  
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name" variant={"smooth"}>
                    Username
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="black"
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Enter a name"
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
                  <FormLabel htmlFor="password" variant={"smooth"}>
                    Password
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="black"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" bg="black" color="white" width="full">
                  CREATE ACCOUNT
                </Button>
                <Box alignSelf="center">
                  <Text fontSize="lg">
                    Already a member? <Link to="/login">Sign in</Link>
                  </Text>
                </Box>
                <Box alignSelf="center">
                  <Text variant={"outline"}>
                    By signing up, you agree to the ByMe.com Terms of Use and
                    Privacy Policy. We respect and protect your information and
                    privacy.
                  </Text>
                </Box>
                <br />
              </VStack>
            </form>
          </Box>
        </Flex>
        <br/>
        <br/>
        <br/>
        <br/>
      </Box>
      
    );
  }
  