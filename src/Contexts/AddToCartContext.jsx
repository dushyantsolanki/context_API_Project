import { createContext } from "react";

export const AddToCartContext = createContext({
  userName: "dushyant",
  passWord: "solanki@123",
  addTodo: (id) => {},
});

export const AddToCartProvider = AddToCartContext.Provider;
