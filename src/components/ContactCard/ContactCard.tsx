"use client";

import { Flex, Text, TextProps } from "@/common/components";
import { useColorModeValue as mode } from "@chakra-ui/react";

type ContactCardProps = {
  icon: JSX.Element;
  contact: string;
} & TextProps;

const ContactCard = (props: ContactCardProps) => {
  const { icon, contact, ...restProps } = props;
  return (
    <Flex
      alignItems={"center"}
      boxShadow={"lg"}
      bg={mode("gray.200", "gray.700")}
      mt={3}
      py={2}
      px={4}
      w={"100%"}
      minW={"300px"}
    >
      {icon}
      <Text {...restProps} ml={2}>
        {contact}
      </Text>
    </Flex>
  );
};

export { ContactCard };
export type { ContactCardProps };
