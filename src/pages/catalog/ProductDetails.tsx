import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { HeaderCatalogPage } from "../../components/Header/HeaderCatalog";
import FooterPages from "../../components/Footer/FooterPages";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gcImage from "../../assets/grand-caravan.jpg"
import g6000Image from "../../assets/global6000.jpeg"
import g650Image from "../../assets/g650.jpg"
import kaImage from "../../assets/kingair.jpeg"
import { useParams } from "react-router"
import { Header } from "../../components/Header";

const airplaneCards = [
  {
    id: "1",
    name: "Grand Caravan",
    description: "Alcance de 1.700km",
    speed: "Até 340km/h",
    imageSrc: gcImage,
    price: "5.000.000",
  },
  {
    id: "2",
    name: "Global 6000",
    description: "Alcance de 11.000km",
    speed: "Até 900km/h",
    imageSrc: g6000Image,
    price: "5.000.000",
  },
  {
    id: "3",
    name: "Gulfstream G650",
    description: "Alcance de 13.000km",
    speed: "Até 950km/h",
    imageSrc: g650Image,
    price: "5.000.000",
  },
  {
    id: "4",
    name: "Kingair B200",
    description: "Alcance de 3.200km",
    speed: "Até 520km/h",
    imageSrc: kaImage,
    price: "5.000.000",
  },
]

const ProductDetailPage = () => {

  const { slug } = useParams()

  return (
    <div className="flex flex-col justify-between gap-32">
      <div>
        <Header />
      </div>
      <Container maxW="4xl">
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
          <GridItem>
            <Carousel
              showArrows={true}
              showThumbs={false}
              width="base:80%, md:400px"
            >
              <img
                src="https://via.placeholder.com/400x400"
                alt="Product Image"
              />
              <img
                src="https://via.placeholder.com/400x400"
                alt="Product Image"
              />
            </Carousel>
          </GridItem>
          <GridItem>
            <Heading as="h1" size="xl" mb={4}>
              Nome do produto {slug}
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              Descricao do produto Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam convallis libero quis dui fermentum, eget
              interdum libero ultricies.
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="teal.500" mb={4}>
              $1000000
            </Text>
            <Box mb={4} display={"flex"} flexDirection={"column"}>
              <Heading as={"h2"} size={"md"}>
                {" "}
                Deseja mais informações? entre em contato!
              </Heading>
              <div className="flex mt-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <FaWhatsapp
                    size={24}
                    style={{ marginRight: "8px", color: "green" }}
                  />
                </a>
                <a
                  href="mailto:info@example.com"
                  title="Email"
                  className="ml-4"
                >
                  <FaEnvelope
                    size={24}
                    style={{ marginRight: "8px", color: "#F4D03F" }}
                  />
                </a>
                <a href="tel:+1234567890" title="Phone" className="ml-4">
                  <FaPhone size={24} />
                </a>
              </div>
            </Box>
          </GridItem>
        </Grid>

        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            Especificação do avião
          </Heading>
          <ul>
            <li>
              <Text fontSize="md">Feature 1: Lorem ipsum dolor sit amet</Text>
            </li>
            <li>
              <Text fontSize="md">Feature 2: Consectetur adipiscing elit</Text>
            </li>
            <li>
              <Text fontSize="md">
                Feature 3: Nullam convallis libero quis dui
              </Text>
            </li>
            <li>
              <Text fontSize="md">
                Feature 4: Eget interdum libero ultricies
              </Text>
            </li>
          </ul>
        </Box>

        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            Customer Reviews
          </Heading>
          {/* Add customer reviews here */}
        </Box>
      </Container>
      <div className="flex mt-[300px] md:mt-[5rem]">
        <FooterPages />
      </div>
    </div>
  );
};

export default ProductDetailPage;
