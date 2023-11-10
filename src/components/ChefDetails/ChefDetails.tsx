"use client";
import {
  Avatar,
  Flex,
  HStack,
  PhoneIcon,
  EmailIcon,
  VStack,
} from "../../common/components";
import { ContactCard } from "../ContactCard";
import { ChefInformationCard } from "../ChefInformationCard";

type ChefDetailProps = {
  name: string;
  description: string;
  quote: string;
  experience: string;
  phoneNumber: string;
  email: string;
  imageUrl?: string;
};

const ChefDetail = (props: ChefDetailProps) => {
  const { phoneNumber, email, imageUrl = "", ...chefData } = props;
  return (
    <HStack
      spacing={"10px"}
      my={4}
      alignItems={"start"}
      justifyContent={"center"}
      w={"100%"}
    >
      <VStack spacing={"10px"}>
        <Avatar
          name="Gordon Ramsay"
          src="https://media.makeameme.org/created/its-raw-you-354d16f399.jpg"
          boxSize={"200px"}
          mb={"6px"}
        />
        <ContactCard icon={<PhoneIcon />} contact={phoneNumber} />
        <ContactCard icon={<EmailIcon />} contact={email} />
      </VStack>
      <ChefInformationCard {...chefData} />
    </HStack>
  );
};

export { ChefDetail };
export type { ChefDetailProps };
