"use client";

import { VStack } from "../../common/components";
import { ReviewSection, ReviewSectionProps } from "../ReviewSection";

type ReviewSectionListProps = {
  reviews: ReviewSectionProps[];
};

const ReviewSectionList = (props: ReviewSectionListProps) => {
  const { reviews } = props;
  return (
    <VStack alignItems={"flex-start"} m={4}>
      {reviews.map((review, index) => (
        <ReviewSection key={index} {...review} />
      ))}
    </VStack>
  );
};

export { ReviewSectionList };
export type { ReviewSectionListProps };
