import React from 'react'
import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useProductStore } from '../store/product';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('black', 'white');
    const {products} = useProductStore(); 

    return (
        <Container bg={useColorModeValue("gray.100", "gray.900")} color={textColor} maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    md: "row"
                }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, #fff3b0, #99582a)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Product Listing 🛒</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <FaRegPlusSquare />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode} variant="ghost">
                        {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar