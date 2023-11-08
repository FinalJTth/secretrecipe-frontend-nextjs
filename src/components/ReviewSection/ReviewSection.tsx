"use client";

import { StarRating } from "../StarRating";
import { VStack, Text } from "../../common/components";

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
      p={4}
      boxShadow={"md"}
      spacing={1}
      w={"100%"}
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
