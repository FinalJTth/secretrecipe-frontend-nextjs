"use client";

import { StarRating } from "../StarRating";
import { VStack, Text } from "../../common/components";
import { useColorModeValue as mode } from "@chakra-ui/react";

type ReviewSectionProps = {
  rating: number;
  reviewerName: string;
  description: string;
};

const ReviewSection = (props: ReviewSectionProps) => {
  const { rating, reviewerName, description } = props;
  return (
    <VStack
      alignItems={"flex-start"}
      boxShadow={"lg"}
      spacing={1}
      w={"100%"}
      bg={mode("gray.200", "gray.700")}
      p={"10px"}
    >
      <Text fontSize={"lg"} fontWeight={600}>
        {reviewerName}
      </Text>
      <StarRating rating={rating} count={5} boxSize={"5"} />
      <Text fontSize={"md"}>{description}</Text>
    </VStack>
  );
};

export { ReviewSection };
export type { ReviewSectionProps };
