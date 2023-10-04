import { Box, Flex, Text, Link, VStack, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" color="black" py="4">
      <Flex
        maxW="1200px"
        mx="auto"
        px="4"
        justifyContent="space-between"
        className="flex-col text-gray-700"
      >
        <Box flex="1">
          <VStack spacing="4" align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
            Aeroporto Internacional de Brasília, Hangar 31 - Lago Sul, Brasília - DF, 71608-900
            </Text>
            <Text>+55 (61) 9 9958-1090</Text>
          </VStack>
        </Box>
      </Flex>
      <Divider bg="black.50" my="6" borderColor="gray.600" />
      <Box className="bg-yellow-600 " color="white" py="4">
        <Flex
          maxW="1200px"
          mx="auto"
          px="4"
          justifyContent="space-between"
          alignItems="center"
          className=""
        >
          <Text fontSize={{ base: "14px", md: "20px" }}>PRECISA DE AJUDA?</Text>
          <Flex>
            <Link mr="4">
              <Text fontSize={{ base: "14px", md: "20px" }}>
                Entre em contato
              </Text>
            </Link>
            <Link mr="4">
              <Text fontSize={{ base: "14px", md: "20px" }}>
                Venda exclusiva
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
