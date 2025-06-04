import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

const HomePage = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('black', 'white')

  return (
    <Box p={4} bg={useColorModeValue("gray.100", "gray.900")} color={textColor} borderRadius="md" mt={4}>
      HomePage
    </Box>
  )
}

export default HomePage