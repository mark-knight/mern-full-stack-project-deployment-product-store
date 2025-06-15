import { Box, Container, Heading, useColorModeValue, VStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

const CreatePage = () => {
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        price: '',
        image: '',
    })

    return (
        <Container maxW={'container.sm'}>
            <VStack spacing={8}>
                <Heading as={'h1'} size={'2xl'} textAlign={'center'}>
                    Create New Product
                </Heading>
                <Box w={'full'} bg={useColorModeValue('white', 'gray.800')}
                    p={6} rounded={'md'} shadow={'md'}>
                    <VStack spacing={4} align={'stretch'}>
                        <Input
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder="Product Price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder="Product Image URL"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button colorScheme="blue" onClick={() => {
                            // Handle product creation logic here
                            console.log('Product created:', newProduct);
                            setNewProduct({ name: '', price: '', image: '' }); // Reset form
                        }}>
                            Create Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage