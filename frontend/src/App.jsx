import React from 'react'
import { Box, useColorModeValue } from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'

function App() {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const textColor = useColorModeValue('black', 'white')

  return (
    <Box minH={"100vh"} bg={bgColor} color={textColor} p={5}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
