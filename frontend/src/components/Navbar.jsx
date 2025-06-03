import React from 'react'
import { Button, Container, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa";

const Navbar = () => {
    return (
        <Container>
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
                </HStack>



            </Flex>
        </Container>
    )
}

export default Navbar