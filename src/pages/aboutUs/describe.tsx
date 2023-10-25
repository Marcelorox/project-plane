import { Box, Flex, Text, Image } from "@chakra-ui/react";

import img from "../../assets/private-jet.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function DescribeHomePage() {
  const boxVariant = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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
    <Box py={{ base: 1, md: 8 }} bg="white" width={"100vw"}>
      <Flex
        maxW="1200px"
        mx="auto"
        px="4"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box flex="1" pr="8">
          <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <Text fontSize="xl" fontWeight="medium" mb="4" color="yellow.600">
              DELUXE FLIGHTS
            </Text>
            <Text fontSize="lg" mb="6" color="black" className="">
              Our deluxe services offer the best in the Air Taxi sector with luxury, safety, and speed. We provide a service designed to ensure our customers the utmost comfort, as well as all the conveniences that every traveler desires.
            </Text>
            <Text fontSize="lg" color="black" className="">
              From elegantly designed interiors to the latest innovations in aviation technology, each aircraft in our catalog is selected with strict criteria, ensuring that you enjoy not only the flight but also an elevated lifestyle.
            </Text>
          </motion.div>
        </Box>
        <Box flex="1" marginTop={{ base: "10", md: "0" }}>
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
