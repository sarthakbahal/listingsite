import { Box, Button, Heading, Input, useColorMode, useColorModeValue, VStack, Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
 
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    description:"",
    image:"",
    category:""
  });

  const {createProduct} = useProductStore()
  const handleAddProduct = async() =>{
     const {success,message} = await createProduct(newProduct)
     console.log("Success:",success)
     console.log("Message:",message)
  }
 
  return (
    <Container maxW={"container.sm"}>
      <VStack 
        spacing={8}
      >
        <Heading as={"h2"} size={"xl"} textAlign={"center"} mb={8}>
          Create New Listing : 
        </Heading>

        <Box
          w={"full"} bg={useColorModeValue("white","gray.700")}
          p={6} rounded={"lg"} shadow={"md"}  
        >

          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
            />
            <Input
              placeholder='Product Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
            />
            <Input
              placeholder='Product Description'
              name='description'
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value})}
            />
            <Input
              placeholder='Product Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
            />
            <Input
              placeholder='Product Category'
              name='category'
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value})}
            />
            
            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
              Add Product

            </Button>

          </VStack>

        </Box>

      </VStack>
    </Container>
  )
}

export default CreatePage