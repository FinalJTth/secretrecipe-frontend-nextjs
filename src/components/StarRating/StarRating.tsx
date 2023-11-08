"use client";

import React, { useState } from "react";
import { Box, HStack } from "../../common/components";
import { StarIcon, IconProps } from "../../common/components/Icons";

type StarRatingProps = {
  rating: number;
  count: number;
} & IconProps;

const StarRating = (props: StarRatingProps) => {
  const { rating, count, boxSize } = props;
  return (
    <HStack spacing={"2px"}>
      {[...Array(count || 5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Box as="label" key={index}>
            <StarIcon
              boxSize={boxSize}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </Box>
        );
      })}
    </HStack>
  );
};

export { StarRating };
export type { StarRatingProps };
