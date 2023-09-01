// src/components/CatalogItem.tsx
import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";

interface CatalogItemProps {
  name: string;
  imageUrl: string;
  price: number;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ name, imageUrl, price }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="p-4 bg-white shadow-md"
    >
      <Image src={imageUrl} alt={name} />
      <Box p="4">
        <Text fontWeight="semibold" fontSize="xl" mb="2">
          {name}
        </Text>
        <Text color="gray.500">${price.toFixed(2)}</Text>
        <Badge colorScheme="blue" mt="2">
          Novo
        </Badge>
      </Box>
    </Box>
  );
};

export default CatalogItem;
