"use client";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ChefDetail } from "@/components";
import { useStores } from "../../stores";

type ChefDetailsProps = {
  chefId: string;
};

const ChefDetails = observer(({ chefId }: ChefDetailsProps) => {
  const { chef } = useStores();
  const [willRender, setWillRender] = useState<Boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        await chef.fetchChefById(chefId);
        setWillRender(true);
      } catch (error) {
        console.error("Error fetching chef details:", error);
      }
    };
    fetch();
  }, [chef, chefId, chef.currentChef]);

  if (willRender == false) {
    return;
  }

  const { id, ...chefData } = chef.currentChef;
  console.log(chefData);

  return <ChefDetail {...chefData} />;
});

export { ChefDetails };
export type { ChefDetailsProps };
