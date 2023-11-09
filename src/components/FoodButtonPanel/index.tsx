"use client";

import { useEffect, useState } from "react";
import { Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores";

type ButtonProps = {
  id: string;
  name: string;
};

type FoodButtonPanelProps = {
  recipes: Array<ButtonProps>;
};

const FoodButtonPanel = observer((): JSX.Element => {
  const { recipe } = useStores();

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [willRender, setWillRender] = useState<Boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await recipe.fetchPageRecipes(10, page);
      setTotalPage(res.paginationMetadata.totalPage);
      setWillRender(true);
    };
    fetch();
  }, [page, recipe, recipe.recipes]);

  if (willRender == false) {
    return <></>;
  }

  const handleArrowButton = (num: number) => {
    if (num > 0 && num <= totalPage) {
      setPage(num);
    }
  };

  const renderFoodButton = (id: string, name: string) => {
    return (
      <Link key={id} href={`/recipe/${id}`} width="100%">
        <Button key={id} variant="solid" width="300px">
          <Text key={id}>{name}</Text>
        </Button>
      </Link>
    );
  };

  return (
    <>
      <Heading size="3xl" fontWeight="extrabold" my="6">
        Menu
      </Heading>
      <HStack spacing="20px">
        <Button px="10px" onClick={() => handleArrowButton(page - 1)}>
          <ArrowLeftIcon />
        </Button>
        <VStack>
          {recipe.recipes.map(recipe =>
            renderFoodButton(recipe.id, recipe.name),
          )}
        </VStack>
        <Button px="10px" onClick={() => handleArrowButton(page + 1)}>
          <ArrowRightIcon />
        </Button>
      </HStack>
    </>
  );
});

export default FoodButtonPanel;
