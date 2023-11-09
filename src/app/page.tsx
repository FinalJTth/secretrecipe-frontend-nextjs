"use client";

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
  const foodList = ["Rotee Dip", "Curry Wurst"];

  const renderFoodButton = (str: string, id: number) => {
    return (
      <Button variant="solid" width="60%" key={id}>
        <Text key={id}>{str}</Text>
      </Button>
    );
  };

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
        <Heading size="3xl" fontWeight="extrabold" my="6">
          Menu
        </Heading>
        <FoodButtonPanel />
      </VStack>
    </Box>
  );
};

export default Home;
