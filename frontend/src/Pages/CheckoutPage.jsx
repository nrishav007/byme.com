import { Box, Button, Divider, Flex,FormControl,FormLabel,Image,Input,Select,Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const InitalFormData = {
    Fname : '',
    Lname : '',
    address : '',
    country : 'India',
    phone : ''
}
export default function CheckoutPage ( ){
    const {Checkout} = useSelector((store)=>{
        return {
            Checkout : store.Checkout
        }
    })
    const [FormData,SetFormData] = useState(InitalFormData);

    const handleChange = (e) =>{
        const {value,name} = e.target;
        const val = name === 'phone' ? Number(value) : value;
        SetFormData({...FormData,[name] : val});
    }
    return (
        <>
        <Navbar/>
        <Box height={{base :'100px'}}></Box>
          <Flex className="CheckOutMainFlex"  direction={{base :'column', md :'row'}} w={{base :'95%', md :'95%', lg :'90%'}} rowGap='30px' m='auto'> 
            <Box  w={{base : '100%', md :'60%', lg : '70%'}}>
                <Text fontWeight='550'>Shipping Address</Text>
                <Divider/>

                <FormControl isRequired mt='20px' >
                    <FormLabel>Email Address</FormLabel>
                    <Input size='sm' mt='10px' focusBorderColor='black' type='text' _selected={{border : 'none'}} />
                </FormControl>

                <FormControl isRequired mt='20px'>
                    <FormLabel>First Name</FormLabel>
                    <Input size='sm' mt='10px' focusBorderColor='black' border='1px solid black' type='text' name='Fname' onChange={handleChange} value={FormData.Fname} />
                </FormControl>

                <FormControl isRequired mt='20px'>
                    <FormLabel>Lasat Name</FormLabel>
                    <Input size='sm' mt='10px' focusBorderColor='black' type='text' name="Lname" onChange={handleChange} value={FormData.Lname} />
                </FormControl>

                <FormControl isRequired mt='20px'>
                    <FormLabel>Street Address</FormLabel>
                    <Input size='sm' mt='10px' focusBorderColor='black' type='text' name="address" onChange={handleChange} value={FormData.address} />
                </FormControl>


                <FormControl isRequired mt='20px'>
                    <FormLabel>City</FormLabel>
                    <Input size='sm' mt='10px' focusBorderColor='black' type='text' />
                </FormControl>

                <FormControl isRequired mt='20px'>
                    <FormLabel>State</FormLabel>
                    <Select size='sm' mt='10px' focusBorderColor='black'>
                        <option value={'Please select state'}>Please select state</option>
                        <option value={'Andaman and Nicobar Islands'}>Andaman and Nicobar Islands</option>
                        <option value={'Andra Pradesh'}>Andra Pradesh</option>
                        <option value={'Arunachal Pradesh'}>Arunachal Pradesh</option>
                        <option value={'Assam'}>Assam</option>
                        <option value={'Bihar'}>Bihar</option>
                        <option value={'Chandigarh'}>Chandigarh</option>
                        <option value={'Chhattisgarh'}>Chhattisgarh</option>
                        <option value={'Dadra and Nagar Haveli'}>Dadra and Nagar Haveli</option>
                        <option value={'Goa'}>Goa</option>
                        <option value={'Gujarat '}>Gujarat   </option>
                        <option value={'Haryana'}>Haryana</option>
                        <option value={'Himachal Pradesh'}>Himachal Pradesh</option>
                        <option value={'Jharkhand'}>Jharkhand</option>
                        <option value={'Karnataka'}>Karnataka</option>
                        <option value={'Kerala'}>Kerala</option>
                        <option value={'Madhya Pradesh'}>Madhya Pradesh</option>
                        <option value={'Maharashtra'}>Maharashtra</option>
                        <option value={'Manipur'}>Manipur</option>
                        <option value={'Meghalaya'}>Meghalaya</option>
                        <option value={'Mizoram'}>Mizoram</option>
                        <option value={'Nagaland'}>Nagaland</option>
                        <option value={'Odisha'}>Odisha</option>
                        <option value={'Punjab'}>Punjab</option>
                        <option value={'Sikkim'}>Sikkim</option>
                        <option value={'Tamil Nadu'}>Tamil Nadu</option>
                        <option value={'Telangana'}>Telangana</option>
                        <option value={'Tripura'}>Tripura</option>
                        <option value={'Uttarakhand'}>Uttarakhand</option>
                        <option value={'Uttar Pradesh'}>Uttar Pradesh</option>
                        <option value={'West Bengal'}>West Bengal</option>
                    </Select>
                </FormControl>

                <FormControl isRequired mt='20px'>
                    <FormLabel>Zip/Postal Code</FormLabel>
                    <Input size='sm' mt='10px' focusBorderColor='black' type='text' />
                </FormControl>

                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select size='sm' mt='10px' focusBorderColor='black' name="country" defaultValue={FormData.country} onChange={handleChange}>
                        <option value="India">India</option>
                        <option value="----">----</option>
                    </Select>
                </FormControl>


                <FormControl isRequired mt='20px'>
                    <FormLabel>Phone Number</FormLabel>
                    <Input size='sm' mt='10px' focusBorderColor='black' type='number' name="phone" value={FormData.phone} onChange={handleChange}/>
                </FormControl>
            </Box>

            <Box w={{base : '100%', md :'40%', lg : '30%'}}>
                <Text textAlign='center' fontWeight='550'>Order Summmary</Text>
                {Checkout.map((elem)=>{
                    return (
                        <Flex  mt='20px'>
                            <Box  width='30%' display='flex' justifyContent='center'>
                                <Image m='auto' boxSize={{base : '80px', md :'60px', lg :'100px'}} src={elem.image}/>
                            </Box>

                            <Box width='50%' fontSize={{base : '12px', md : '12px'}}>
                            <Text fontWeight='550'>{elem.title}</Text>
                            <Text>{elem.description}</Text>
                            </Box>

                            <Box  width='20%' fontSize='14px'>
                                <Text>{elem.price}</Text>
                            </Box>
                        </Flex>
                    )
                })}
            </Box>
          </Flex>

          <Box width={{base :'15%', md :'10%', lg :'5%'}} m='auto' mt={{base :'10px', md :'30px'}} mb='50px'>
          <Link to='/userdetails'><Button colorScheme='black' color='white' bg='black' size={{base : 'sm',md: 'md'}} disabled={FormData.Fname === '' || FormData.Lname === '' || FormData.address === '' || FormData.country == '' || FormData.phone === ''}>Next</Button></Link>
          </Box>
          <Footer/>
        </>
    );
};