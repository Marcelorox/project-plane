// src/pages/CatalogPage.tsx
import React from "react";
import { Input, Button, SimpleGrid } from "@chakra-ui/react";
import CatalogItem from "../../components/CatalogItem";
import FilterBar from "../../components/FilterBar";
import aviaoimg from "../../assets/aviao.jpg";
import { HeaderCatalogPage } from "../../components/Header/HeaderCatalog";
import { Link } from "react-router-dom";
const CatalogPage: React.FC = () => {
  const items = [
    { name: "Avião A", imageUrl: aviaoimg, price: 1000000 },
    { name: "Avião B", imageUrl: aviaoimg, price: 1500000 },
  ];

  return (
    <>
      <HeaderCatalogPage />
      <div className="flex h-[89vh] bg-gray-100">
        <FilterBar />
        <div className="container p-8 mx-auto">
          <div className="flex items-center justify-between mb-6">
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
            {items.map((item, index) => (
              <Link to={`/product/${item.name}`} key={index}>
                <CatalogItem
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                />
              </Link>
            ))}
          </SimpleGrid>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
