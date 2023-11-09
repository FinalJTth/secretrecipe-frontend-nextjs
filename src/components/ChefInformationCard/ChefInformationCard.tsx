"use client";
import { Flex, Text } from "@/common/components";
import { useColorModeValue as mode } from "@chakra-ui/react";

type ChefInformationCardProps = {
  name: string;
  description: string;
  quote: string;
  experience: string;
};

const ChefInformationCard = (props: ChefInformationCardProps) => {
  const { name, description, quote, experience } = props;
  return (
    <Flex
      flexDirection={"column"}
      boxShadow={"lg"}
      bg={mode("gray.200", "gray.700")}
      p={8}
    >
      <Text
        fontWeight={"semibold"}
        fontSize={"lg"}
        color={"#6a6f73"}
      >{`CHEF`}</Text>
      <Text fontWeight={"extrabold"} fontSize={"4xl"}>
        {name}
      </Text>
      <Text fontWeight={600} fontSize={"lg"}>
        {experience}
      </Text>
      <Text fontWeight={"extrabold"} fontSize={"2xl"} mt={4}>
        About Me
      </Text>
      <Text fontSize={"lg"}>{description}</Text>
      <Text
        fontWeight={"extrabold"}
        fontSize={"xl"}
        my={4}
      >{`"${quote}"`}</Text>
    </Flex>
  );
};

export { ChefInformationCard };
export type { ChefInformationCardProps };
