// src/components/FilterBar.tsx
import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const FilterBar: React.FC = () => {
  const aircraftTypes = [
    "Monomotor pistão",
    "Bimotor pistão",
    "Experimental",
    "Monomotor turbo-hélice",
    "Bimotor turbo-hélice",
    "Agrícola",
    "Helicóptero",
    "Jato",
  ];

  const [price, setPrice] = useState<number>(0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <Box className="bg-gray-900" h="89vh" width={"25%"} p={4} shadow="md">
      <VStack align="flex-start" spacing={4}>
        <Text color="white" fontWeight="semibold" fontSize="lg">
          Filtros
        </Text>
        <Text color="yellow.400">Preço máximo: {formatCurrency(price)}</Text>
        <Slider
          defaultValue={0}
          max={10000000}
          step={500000}
          onChange={(value) => setPrice(value)}
        >
          <SliderTrack>
            <SliderFilledTrack backgroundColor={"yellow.500"} />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        {aircraftTypes.map((type, index) => (
          <Checkbox
            key={index}
            colorScheme="white"
            defaultChecked={false}
            color="white"
          >
            {type}
          </Checkbox>
        ))}
      </VStack>
    </Box>
  );
};

export default FilterBar;
