"use client";
import { Box, Flex, Text } from "@/common/components";
import { Spacer, useColorModeValue as mode } from "@chakra-ui/react";

type ChefInformationCardProps = {
  name: string;
  description: string;
  quote: string;
  experience: string;
};

const ChefInformationCard = (props: ChefInformationCardProps) => {
  const { name, description, quote, experience } = props;
  return (
    <Flex flexDirection={"column"} h={"100%"} maxW={"32vh"}>
      <Text
        fontWeight={"semibold"}
        fontSize={"lg"}
        color={"#6a6f73"}
      >{`CHEF`}</Text>
      <Text fontWeight={"extrabold"} fontSize={"4xl"}>
        {name}
      </Text>
      <Text fontWeight={300} fontSize={"lg"} mt={-3}>
        {experience}
      </Text>
      <Spacer />
      <Flex
        flexDirection={"column"}
        boxShadow={"lg"}
        bg={mode("gray.200", "gray.700")}
        h={"100%"}
        px={"16px"}
        py={"10px"}
        mt={"16px"}
      >
        <Text fontWeight={"extrabold"} fontSize={"3xl"}>
          About Me
        </Text>
        <Text
          fontSize={"md"}
          fontWeight={"500"}
          letterSpacing={"-2%"}
          lineHeight={"25px"}
        >
          {description}
        </Text>
      </Flex>
      <Box
        boxShadow={"lg"}
        bg={mode("gray.200", "gray.700")}
        maxW={"100%"}
        px={"16px"}
        py={"10px"}
        mt={"10px"}
      >
        <Text fontWeight={"extrabold"} fontSize={"3xl"}>
          Quote
        </Text>
        <Text
          fontSize={"md"}
          fontWeight={"500"}
          lineHeight={"25px"}
        >{`"${quote}"`}</Text>
      </Box>
    </Flex>
  );
};

export { ChefInformationCard };
export type { ChefInformationCardProps };
