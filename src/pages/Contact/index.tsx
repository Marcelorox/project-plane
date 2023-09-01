import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Header } from "../../components/Header";


const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center h-[100vh]">
        <div className="flex mt-[6rem]">
          <Box p="4">
            <Heading className="flex justify-center" mb="4">
              Entre em Contato
            </Heading>
            <Flex flexWrap="wrap" gap="4">
              <Box
                className="mt-8"
                flex="1"
                minWidth={{ base: "100%", md: "auto" }}
              >
                <Text fontWeight="bold" mb="2">
                  Informações de Contato
                </Text>
                <Flex alignItems="center" mb="2">
                  <FiMail />
                  <Text ml="2">contato@empresa.com</Text>
                </Flex>
                <Flex alignItems="center" mb="2">
                  <FiPhone />
                  <Text ml="2">(11) 1234-5678</Text>
                </Flex>
                <Flex alignItems="center">
                  <FiMapPin />
                  <Text ml="2">Rua da Empresa, 123 - São Paulo, SP</Text>
                </Flex>
              </Box>
              <Box
                className="mt-8"
                flex="1"
                minWidth={{ base: "100%", md: "auto" }}
              >
                <Text fontWeight="bold" mb="2">
                  Envie uma Mensagem
                </Text>
                <Input placeholder="Seu nome" mb="2" />
                <Input placeholder="Seu e-mail" mb="2" />
                <Textarea placeholder="Sua mensagem" mb="2" rows={5} />
                <Button colorScheme="yellow">Enviar</Button>
              </Box>
            </Flex>
          </Box>
        </div>
        
      </div>
    </>
  );
};

export default ContactPage;
