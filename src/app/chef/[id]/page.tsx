"use client";
import { ChefDetails } from "@/containers";
import { Flex, Box } from "@/common/components";

const chefDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Flex maxW={{ sm: "3xl" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
      <ChefDetails chefId={params.id} />
    </Flex>
  );
};

export default chefDetailsPage;
