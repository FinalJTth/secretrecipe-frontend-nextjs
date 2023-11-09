"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import FoodButtonPanel from "../components/FoodButtonPanel";

const Home = (): JSX.Element => {
  return (
    <Box
      // borderWidth="1px"
      // #borderColor="black"
      maxW={{ sm: "lg" }}
      mx={{ sm: "auto" }}
      mt="15vh"
      w={{ sm: "full" }}
    >
      <VStack>
        <FoodButtonPanel />
      </VStack>
    </Box>
  );
};

export default Home;
