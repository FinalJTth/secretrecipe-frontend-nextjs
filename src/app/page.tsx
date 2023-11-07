"use client";

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const Home = (): JSX.Element => {
  const foodList = ["Rotee Dip", "Curry Wurst"];

  const renderFoodButton = (str: string, key: number) => {
    return (
      <Button variant="solid" width="60%" key={key}>
        <Text key={key}>{str}</Text>
      </Button>
    );
  };

  return (
    <Box
      // borderWidth="1px"
      // #borderColor="black"
      maxW={{ sm: "md" }}
      mx={{ sm: "auto" }}
      mt="15vh"
      w={{ sm: "full" }}
    >
      <VStack>
        <Heading size="xl" fontWeight="extrabold" my="6">
          Menu
        </Heading>
        {foodList.map((object, i) => renderFoodButton(object, i))}
      </VStack>
    </Box>
  );
};

export default Home;
