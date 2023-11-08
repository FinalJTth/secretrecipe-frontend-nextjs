"use client";

import { VStack, Flex, Text, StarIcon } from "../../common/components";
import { ReviewSection, ReviewSectionProps } from "../ReviewSection";

type ReviewSectionListProps = {
  reviews: ReviewSectionProps[];
  avgRating: number;
  totalReviews: number;
};

const ReviewSectionList = (props: ReviewSectionListProps) => {
  const { reviews, avgRating, totalReviews } = props;
  return (
    <Flex flexDirection={"column"} m={4}>
      <Flex alignItems={"center"} py={2}>
        <StarIcon fontSize={"2xl"} color={"#b4690e"} mr={1} />
        <Text
          fontSize={"2xl"}
          fontWeight={700}
        >{`${avgRating} review rating | ${totalReviews}K ratings`}</Text>
      </Flex>
      <VStack alignItems={"flex-start"}>
        {reviews.map((review, index) => (
          <ReviewSection key={index} {...review} />
        ))}
      </VStack>
    </Flex>
  );
};

export { ReviewSectionList };
export type { ReviewSectionListProps };
