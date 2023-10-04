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
        <h2
          className="text-4xl mb-12 font-normal"
        >
          VIP ROOMS
        </h2>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={1600}
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
