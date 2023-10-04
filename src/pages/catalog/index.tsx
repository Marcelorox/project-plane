// src/pages/CatalogPage.tsx
import React from "react";
import { Input, Button, SimpleGrid } from "@chakra-ui/react";
import CatalogItem from "../../components/CatalogItem";
import FilterBar from "../../components/FilterBar";
import { Link } from "react-router-dom"
import gcImage from "../../assets/grand-caravan.jpg"
import g6000Image from "../../assets/global6000.jpeg"
import g650Image from "../../assets/g650.jpg"
import kaImage from "../../assets/kingair.jpeg"
import { Header } from "../../components/Header";
import FooterPages from "../../components/Footer/FooterPages";

const CatalogPage: React.FC = () => {

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
  ];

  return (
    <>
      <Header />
      <div className="flex h-[100%] bg-gray-100">
        <FilterBar />
        <div className="container p-8 mx-auto h-full">
          <div className="flex items-start justify-between mb-6">
            <Input
              type="text"
              placeholder="Pesquisar aviões..."
              rounded="md"
              borderColor="gray.300"
              _focus={{ borderColor: "blue.500" }}
              flex="1"
              mr="2"
            />
            <Button colorScheme="blue">Pesquisar</Button>
          </div>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={8}>
            {airplaneCards.map((item, index) => (
              <Link to={`/product/${item.id}`} key={index}>
                <CatalogItem
                  name={item.name}
                  imageUrl={item.imageSrc}
                  price={item.price}
                />
              </Link>
            ))}
          </SimpleGrid>
        </div>
      </div>
      <div className="">
        <FooterPages />
      </div>
    </>
  );
};

export default CatalogPage;
