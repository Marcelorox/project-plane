import { Box, Flex, Text, Image } from "@chakra-ui/react";
import img from "../../assets/private-jet.jpg";
function DescribeHomePage() {
  return (
    <Box py="8" bg="gray.100">
      <Flex
        maxW="1200px"
        mx="auto"
        px="4"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex="1" pr="8">
          <Text fontSize="xl" fontWeight="bold" mb="4" color="yellow.500">
            Sobre Nós
          </Text>
          <Text fontSize="lg" mb="6" color="gray.700">
            Na aircraft, a nossa paixão por aviões é refletida em cada detalhe
            das aeronaves que oferecemos. Combinamos luxo e conforto para
            proporcionar a você uma experiência única nos céus. Nossa dedicação
            em fornecer aeronaves excepcionais é incomparável, e nosso
            compromisso com a sua satisfação é absoluto.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Desde os interiores elegantemente projetados até as mais recentes
            inovações em tecnologia de aviação, cada aeronave em nosso catálogo
            é selecionada com um critério rigoroso, garantindo que você desfrute
            não apenas do voo, mas de um estilo de vida elevado.
          </Text>
        </Box>
        <Box flex="1">
          <Image
            src={img}
            alt="Aeronave de luxo"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
}
export { DescribeHomePage };
