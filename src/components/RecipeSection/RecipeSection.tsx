"use client";

import {
  Flex,
  Text,
  Box,
  Grid,
  GridItem,
  Image,
} from "../../common/components";

type RecipeSectionProps = {
  description?: string;
  name?: string;
  step?: string[];
  ingredients?: string;
  imageUrl?: string;
};

const RecipeSection = (props: RecipeSectionProps) => {
  const { description, name, step = [], ingredients = "" } = props;
  const ingredientList = ingredients.split(",");
  // console.log(ingredientList);

  return (
    <Flex flexDirection={"column"} justifyContent={"center"} mx={4} px={4}>
      <Flex justify={"center"}>
        <Text fontSize={"3xl"} fontWeight={800}>
          {name}
        </Text>
      </Flex>
      <Box h={"400px"}>
        <Image
          src="https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg"
          alt="Food Image"
          objectFit={"scale-down"}
          w={"100%"}
          h={"100%"}
        />
      </Box>
      <Box>
        <Text fontSize={"xl"} fontWeight={700}>
          Description:{" "}
        </Text>
        <Text ml={4}>{description}</Text>
      </Box>
      <Grid templateColumns={"repeat(2, 1fr)"} my={4}>
        <GridItem>
          <Text fontSize={"xl"} fontWeight={700}>
            Ingredients:{" "}
          </Text>
          {ingredientList.map((ingredient, index) => (
            <Text key={index} ml={4}>
              - {ingredient}
            </Text>
          ))}
        </GridItem>
        <GridItem>
          <Flex flexDirection={"column"}>
            <Text fontSize={"xl"} fontWeight={700}>
              Steps:{" "}
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
