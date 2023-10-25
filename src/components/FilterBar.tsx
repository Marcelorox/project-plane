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
    <Box className="bg-[#ffff]" h="120vh" mt="80px" width={"25%"} p={4} shadow="md">
      <VStack align="flex-start" spacing={4} h="100%">
        <Text color="black" fontWeight="semibold" fontSize="xl">
          Filters
        </Text>
        <Text color="yellow.600">Max price: {formatCurrency(price)}</Text>
        <Slider
          defaultValue={0}
          max={10000000}
          step={500000}
          onChange={(value) => setPrice(value)}
        >
          <SliderTrack>
            <SliderFilledTrack backgroundColor={"black"} />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        {aircraftTypes.map((type, index) => (
          <Checkbox
            key={index}
            colorScheme="yellow"
            defaultChecked={false}
            color="black"
          >
            {type}
          </Checkbox>
        ))}
      </VStack>
    </Box>
  );
};

export default FilterBar;
