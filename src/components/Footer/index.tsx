import { Box, Flex, Text, Link, VStack, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blackAlpha.50" color="black" py="8">
      <Flex
        maxW="1200px"
        mx="auto"
        px="4"
        justifyContent="space-between"
        className="flex-col"
      >
        <Box flex="1">
          <VStack spacing="4" align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
              COMPRAR E VENDER AERONAVES
            </Text>
            <Text>
              Conte com a AviõesNet para assessorar o processo de compra ou
              venda de aviões, helicópteros e ultraleves.
            </Text>
            <Text>
              Com vasta experiência no mercado, estamos à disposição para
              selecionar a melhor oportunidade e colocá-lo no mercado de forma
              séria, segura e eficiente.
            </Text>
            <Text>
              Realizamos importação e exportação de aeronaves, oferecendo a
              possibilidade de negócios no exterior, em busca do melhor
              equipamento para suas necessidades na aviação executiva.
            </Text>
          </VStack>
        </Box>

        <Box flex="1">
          <VStack spacing="1" align="flex-start">
            <Text fontSize="lg" fontWeight="bold" marginTop="20px">
              AERONAVES À VENDA
            </Text>
            <Text>- Monomotor pistão</Text>
            <Text>- Bimotor pistão</Text>
            <Text>- Experimental</Text>
            <Text>- Monomotor turbo-hélice</Text>
            <Text>- Bimotor turbo-hélice</Text>
            <Text>- Agrícola</Text>
            <Text>- Helicóptero</Text>
            <Text>- Jato</Text>
          </VStack>
        </Box>
        <Box flex="1" marginTop="20px">
          <VStack spacing="4" align="flex-start">
            <Text fontSize="lg" fontWeight="bold">
              EXEMPLO: SAO PAULO
            </Text>
            <Text>(11) 1111 1111 - Escritório</Text>
            <Text>(11) 1 1111 1111 - Plantão / Whatsapp</Text>
            <Text>+1 (111) 111 1111 USA Office</Text>
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
