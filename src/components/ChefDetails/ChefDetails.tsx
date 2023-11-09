"use client";
import { Avatar, Flex, PhoneIcon, EmailIcon } from "../../common/components";
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
    <Flex alignItems={"flex-start"} justifyContent={"space-around"} my={3}>
      <ChefInformationCard {...chefData} />
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Avatar
          name="Gordon Ramsay"
          src="https://media.makeameme.org/created/its-raw-you-354d16f399.jpg"
          boxSize={"200px"}
        />
        <ContactCard icon={<PhoneIcon />} contact={phoneNumber} />
        <ContactCard icon={<EmailIcon />} contact={email} />
      </Flex>
    </Flex>
  );
};

export { ChefDetail };
export type { ChefDetailProps };
