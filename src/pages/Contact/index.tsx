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
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <footer className="absolute bottom-0 w-full py-6 text-white bg-gray-800">
          <div className="container flex items-center justify-between mx-auto">
            <div>
              <p className="ml-10">
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </p>
            </div>
            <div>
              <ul className="flex mr-10 space-x-4">
                <li>
                  <Link
                    to="#"
                    className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
