import { Box, Flex, Text, Image } from "@chakra-ui/react";
import img from "../../assets/private-jet.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function DescribeHomePage() {
  const boxVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

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
          <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="yellow.500">
              Sobre Nós
            </Text>
            <Text fontSize="lg" mb="6" color="gray.700" className="">
              Na aircraft, a nossa paixão por aviões é refletida em cada detalhe
              das aeronaves que oferecemos. Combinamos luxo e conforto para
              proporcionar a você uma experiência única nos céus. Nossa
              dedicação em fornecer aeronaves excepcionais é incomparável, e
              nosso compromisso com a sua satisfação é absoluto.
            </Text>
            <Text fontSize="lg" color="gray.700" className="">
              Desde os interiores elegantemente projetados até as mais recentes
              inovações em tecnologia de aviação, cada aeronave em nosso
              catálogo é selecionada com um critério rigoroso, garantindo que
              você desfrute não apenas do voo, mas de um estilo de vida elevado.
            </Text>
          </motion.div>
        </Box>
        <Box flex="1">
          <motion.div
            className="box"
            ref={ref}
            variants={imageVariant}
            initial="hidden"
            animate={control}
          >
            <Image
              src={img}
              alt="Aeronave de luxo"
              borderRadius="md"
              boxShadow="lg"
            />
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}
export { DescribeHomePage };
