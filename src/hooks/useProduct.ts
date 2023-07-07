import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const useProduct = () => {
  const value = useContext(ProductContext);
  return value;
};
