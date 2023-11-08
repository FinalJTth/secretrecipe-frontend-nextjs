"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Avatar,
  Text,
} from "../../common/components";

type ChefMetaSectionProps = {
  name?: string;
  description?: string;
  quote?: string;
  imageUrl?: string;
};

const ChefMetaSection = (props: ChefMetaSectionProps) => {
  const { name, description, quote } = props;
  return (
    <Card variant={"unstyled"} m={4} p={4}>
      <CardHeader>
        <Text fontSize={"2xl"} fontWeight={800} mb={2}>
          Chef
        </Text>
      </CardHeader>
      <CardBody>
        <Text
          fontWeight={700}
          fontSize={"lg"}
          color={"#5624d0"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          {name}
        </Text>
        <Flex alignItems={"center"} my={3}>
          <Avatar
            name="Gordon Ramsay"
            src="https://media.makeameme.org/created/its-raw-you-354d16f399.jpg"
            size={"xl"}
          />
          <Text fontWeight={600} fontSize={"xl"} ml={4}>{`"${quote}"`}</Text>
        </Flex>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
};

export { ChefMetaSection };
export type { ChefMetaSectionProps };

// https://media.makeameme.org/created/its-raw-you-354d16f399.jpg
