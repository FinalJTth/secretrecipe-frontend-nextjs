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

const chef = types.model("Chef", {
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
      return yield api.get(`/chefs/${id}`).then((res: Record<string, any>) => {
        self.setCurrentChef({
          id: res.id,
          name: res.name,
          description: res.description,
          imageUrl: res.imageUrl,
          phoneNumber: res.phoneNumber,
          email: res.email,
          quote: res.quote,
          experience: res.experience,
        });
        return self.currentChef;
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
