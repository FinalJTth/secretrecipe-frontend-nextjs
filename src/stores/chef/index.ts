import { types, flow, cast, Instance, getSnapshot } from "mobx-state-tree";
import api from "../../api";

export interface IChef {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  phoneNumber: string;
  email: string;
  quote: string;
  experience: string;
}

export interface IChefMST extends Instance<typeof chef> {}

export const chef = types.model("Chef", {
  id: types.string,
  name: types.string,
  description: types.string,
  imageUrl: types.string,
  phoneNumber: types.string,
  email: types.string,
  quote: types.string,
  experience: types.string,
});

const chefModel = types
  .model("ChefModel", {
    currentChef: chef,
  })
  .actions(self => {
    // Getter
    const getCurrentChef = (): IChefMST => {
      return self.currentChef;
    };

    // Setter
    const setCurrentChef = (chef: IChef) => {
      self.currentChef = chef;
    };

    return { getCurrentChef, setCurrentChef };
  })
  .actions(self => {
    // API
    const fetchChefById = flow(function* fetchChefById(
      id: string,
    ): Generator<any, any, any> {
      return yield api.get(`/chef/${id}`).then((res: Record<string, any>) => {
        self.setCurrentChef({
          id: res.chef.id,
          name: res.chef.name,
          description: res.chef.description,
          imageUrl: res.chef.imageUrl,
          phoneNumber: res.chef.phoneNumber,
          email: res.chef.email,
          quote: res.chef.quote,
          experience: res.chef.experience,
        });
        return res;
      });
    });

    return { fetchChefById };
  })
  .create({
    currentChef: {
      id: "",
      name: "",
      description: "",
      imageUrl: "",
      phoneNumber: "",
      email: "",
      quote: "",
      experience: "",
    },
  });

export default chefModel;
