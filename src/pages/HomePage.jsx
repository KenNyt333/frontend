import { Container,VStack,Text,SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom" 
import { useEffect } from 'react'
import { useProductStore } from "../store/product" 
import { fetchProducts } from ""

const HomePage = () => {
  const { fetchProducts,products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]) 
  console.log("products",products)
  
  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
        <Text
            fontSize={"30"}
            fontWeight={"bold"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
         column={{
          base: 1,
          md: 2,
          lg:3
         }}
         spacing={10}
         w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ) )}
        </SimpleGrid>

        <Text 
            fontSize='x1' 
            textAlign={"center"} 
            fontWeight='bold' 
            color='gray.500'
        >
          Create a product 😿{""}
            <Link to={"/create"}>
              <Text as='span' color='blue.500' _hover={{ textDecoration: "underline "}}>
                 Create a product
               </Text>
            </Link>
        </Text>


      </VStack>
    </Container>
  )
}

export default HomePage