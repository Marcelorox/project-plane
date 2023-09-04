import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import salavip2 from "../././assets/salavip2.jpg";
import salavip3 from "../././assets/salavip3.jpg";

const LuxurySection: React.FC = () => {
  return (
    <Box bg="white" py={16}>
      <Box maxW="container.xl" mx="auto" textAlign="center">
        <Heading
          as="h2"
          fontSize="4xl"
          fontWeight="bold"
          mb={8}
          color="yellow.600"
        >
          Salas VIPS exclusivas para nossos clientes
        </Heading>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={1800}
        >
          <div>
            <img style={{ width: "80%" }} src={salavip2} alt="Sala de Luxo 2" />
          </div>
          <div>
            <img style={{ width: "80%" }} src={salavip3} alt="Sala de Luxo 2" />
          </div>
        </Carousel>
      </Box>
    </Box>
  );
};

export default LuxurySection;
