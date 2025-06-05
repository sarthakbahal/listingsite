import React, { useEffect } from 'react'
import { Box, Container, useColorModeValue, VStack, Text, textDecoration } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SimpleGrid } from '@chakra-ui/react'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('black', 'white')

  const {fetchProducts,products} = useProductStore();
  useEffect(() =>{
    fetchProducts();
  },[fetchProducts]);

  console.log("products : ", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient='linear(to-l,rgb(30, 184, 215),rgb(230, 0, 255))'
          bgClip='text'
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Currently Listed Products 📋
        </Text>



        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing='25px'
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontsize='xl' fontWeight='bold' textAlign={"center"} color='gray.400'>
          No Products Found ☹️ {" "}
          <Link to={"/create"}>
            <Text as='span' color='blue.400' _hover={{ textDecoration: "underline" }}>
              Create a Product

            </Text>
          </Link>

        </Text>
        )}




      </VStack>
    </Container>
  )
}

export default HomePage