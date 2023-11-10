"use client";
import { ChefDetails } from "@/containers";
import { Box } from "@/common/components";

const chefDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Box>
      <ChefDetails chefId={params.id} />
    </Box>
  );
};

export default chefDetailsPage;
export { chefDetailsPage };
