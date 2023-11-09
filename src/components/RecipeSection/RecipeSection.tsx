"use client";

import {
  Flex,
  Text,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
} from "../../common/components";

import { useColorModeValue as mode } from "@chakra-ui/react";

type RecipeSectionProps = {
  description?: string;
  name?: string;
  step?: string[];
  ingredients?: string;
  imageUrl?: string;
};

const RecipeSection = (props: RecipeSectionProps) => {
  const { description, name, step = [], ingredients = "", imageUrl } = props;
  const ingredientList = ingredients.split(",");
  // console.log(ingredientList);

  return (
    <Flex flexDirection={"column"} mx={4}>
      <Flex justify={"center"}>
        <Heading size="3xl" fontWeight="extrabold">
          {name}
        </Heading>
      </Flex>
      <Flex justify={"center"} h={"400px"} mt="40px">
        <Image
          src="https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg"
          alt="Food Image"
          objectFit={"scale-down"}
          h={"100%"}
          boxShadow={"lg"}
        />
      </Flex>
      <Box bg={mode("gray.200", "gray.700")} p="16px" mt="50px" shadow="lg">
        <Text fontSize={"2xl"} fontWeight={800}>
          Description
        </Text>
        <Text ml={4}>{description}</Text>
      </Box>
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        bg={mode("gray.200", "gray.700")}
        p="16px"
        my={4}
        boxShadow={"lg"}
      >
        <GridItem>
          <Text fontSize={"2xl"} fontWeight={800}>
            Ingredients
          </Text>
          {ingredientList.map((ingredient, index) => (
            <Text key={index} ml={4}>
              - {ingredient}
            </Text>
          ))}
        </GridItem>
        <GridItem>
          <Flex flexDirection={"column"}>
            <Text fontSize={"2xl"} fontWeight={800}>
              Steps
            </Text>
            {step.map((step, index) => (
              <Text key={index} ml={4} my={1}>{`${index + 1}. ${step}`}</Text>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export { RecipeSection };
export type { RecipeSectionProps };
