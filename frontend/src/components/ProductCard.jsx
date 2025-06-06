import {React , useState} from 'react'
import { Box, 
    Heading, 
    IconButton, 
    Image, 
    Text, 
    useColorModeValue, 
    HStack, 
    useToast, 
    useDisclosure, 
    VStack ,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useProductStore } from '../store/product'


const ProductCard = ({ product }) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.700")

    const { deleteProduct } = useProductStore();
    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid)

        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: "6000",
                isClosable: true
            })
        } else {
            toast({
                title: 'Product Listing created.',
                description: "We've listed your product for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    const [updatedProduct , setupdatedProduct] = useState(product);



    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    Rs. {product.price} /-
                </Text>

                <Text fontWeight='semibold' fontSize='lg' color={textColor} mb={4}>
                    {product.description}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' />
                </HStack>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update Product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack spacing={4}>
                                <Input
                                    placeholder='Product Name'
                                    name='name'
                                    value={updatedProduct.name}
                                    
                                />
                                <Input
                                    placeholder='Product Price'
                                    name='price'
                                    type='number'
                                    value={updatedProduct.price}
                                    
                                />
                                <Input
                                    placeholder='Product Description'
                                    name='description'
                                    value={updatedProduct.description}
                                    
                                />
                                <Input
                                    placeholder='Product Image URL'
                                    name='image'
                                    value={updatedProduct.image}
                                    
                                />
                                <Input
                                    placeholder='Product Category'
                                    name='category'
                                    value={updatedProduct.category}
                                   
                                />
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>

                </Modal>

            </Box>

        </Box>
    )
}

export default ProductCard