import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useToast } from "@chakra-ui/toast";
import { m } from "framer-motion";
import { useState } from "react";
import { AddProduct, DeleteProduct } from "../Fetch/Fetch";

export default function AdminProducts ( ) {
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [type,setType] = useState('');
    const [description,setDescription] = useState('');
    const [del,setDel] = useState('');
    const Toast = useToast( );

    const handleAdd = (title,image,price,category,type,description) =>{
        const payload = { 
            title,
            image,
            price,
            category,   
            type,
            description
        };
        return AddProduct(payload).then((res)=>{
            console.log(res)
            Toast({title : res.data.msg})
        })
        .catch((err)=> Toast({title : "Errror In Adding Product"}))
    }

    const handleDelete = (del) =>{
        return DeleteProduct(del).then((res)=>{
            console.log(res)
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
        <Text align='center' fontSize={{base :'20px', md: '25px'}}>Add Product</Text>
        <Flex border='2px solid black' width={{base :'90%', lg :'80%'}} m='auto' direction={{base :'column', md :'row'}} columnGap='30px' padding='20px'>
        <Box padding='10px' width={{base :'95%', md: '50%'}}>
            <Text>Product Title</Text>
            <Input type='text' placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br /><br />
            <Text>Product Image</Text>
            <Input type='text' placeholder="Upload image" value={image} onChange={(e) => setImage(e.target.value)}/>
            <br /><br />
            <Text>Product Description</Text>
            <Input type='text' placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br /><br />
            <Text>Product Price</Text>
            <Input type='Number' placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </Box>

            <Box  width={{base :'95%', md: '50%'}}>
            <Text>Product Category</Text>
            <Select defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="-">-</option>
                <option value="shirts">Shirts</option>
                <option value="jeans">Jeans</option>
                <option value="coats">Coats</option>
                <option value="sweaters">Sweaters</option>
                <option value="beachwear">Beach Wear</option>
                <option value="hosiery">Hosiery</option>
            </Select>
            <br /><br />

            <Text>Product Type</Text>
            <Select defaultValue={type} onChange={(e) => setType(e.target.value)}>
                <option value="-">-</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
            </Select>
            <br />
            <Button onClick={( ) => handleAdd(title,image,price,category,type,description)} disabled={title=='' || price=='' || category == '' || type == '' || description === ''}>ADD</Button>
        </Box>
        </Flex>

        <Text align='center' fontSize={{base :'20px', md: '25px'}} mt='30px'>Delete Product</Text>
        <Box width={{base : '80%', md: '60%', lg :'40%'}} m='auto'>
            <Input type='text' value={del} onChange={(e) => setDel(e.target.value)}/>
            <br /><br />
            <Button onClick={( ) => handleDelete(del)}>Delete Product</Button>
        </Box>
        </>
    )
}