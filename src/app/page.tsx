"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Home = (): JSX.Element => {
  return (
    <VStack>
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
        <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
          Menu
        </Heading>
      </Box>
    </VStack>
  );
};

export default Home;
