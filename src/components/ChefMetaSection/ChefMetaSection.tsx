"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Avatar,
  Text,
} from "../../common/components";
import Link from "next/link";
import { useColorModeValue as mode } from "@chakra-ui/react";

type ChefMetaSectionProps = {
  id?: string;
  name?: string;
  description?: string;
  quote?: string;
  imageUrl?: string;
};

const ChefMetaSection = (props: ChefMetaSectionProps) => {
  const { name, description, quote, id = "" } = props;
  return (
    <Card
      variant={"unstyled"}
      rounded={"sm"}
      boxShadow={"lg"}
      bg={mode("gray.200", "gray.700")}
      p={"16px"}
      mx={4}
    >
      <CardHeader>
        <Link href={`/chef/${id}`}>
          <Text
            fontWeight={700}
            fontSize={"2xl"}
            color={"blue.500"}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            {name}
          </Text>
        </Link>
      </CardHeader>
      <CardBody>
        <Flex my={3} alignItems={"center"}>
          <Avatar
            name="Gordon Ramsay"
            src="https://media.makeameme.org/created/its-raw-you-354d16f399.jpg"
            size={"xl"}
          />
          <Box ml={4}>
            <Text fontWeight={600} fontSize={"xl"}>{`"${quote}"`}</Text>
            <Text>{description}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export { ChefMetaSection };
export type { ChefMetaSectionProps };

// https://media.makeameme.org/created/its-raw-you-354d16f399.jpg
