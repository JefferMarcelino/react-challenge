import { ReactNode, createContext, useEffect, useState } from "react"
import { ProductType } from "../data/products";

interface ProductContextType {
  products: ProductType[];
  addProductToCart: (product: ProductType) => void;
  removeProductToCart: (index: number) => void;
}

export const ProductContext = createContext({} as ProductContextType)

interface ProductContextProviderType {
  children: ReactNode;
}

export const ProductContextProvider: React.FC<ProductContextProviderType> = ({children}) => {
  const [ products, setProducts  ] = useState<ProductType[]>([]);

  const addProductToCart = (product: ProductType) => {
    setProducts([...products, product]);
    localStorage.setItem('products', JSON.stringify([...products, product]));
  };

  const removeProductToCart = (index: number) => {
    const newProducts = products && products.filter((_product, indexOfProduct) => {
      return index !== indexOfProduct;
    });

    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify([...newProducts]));
  };

  useEffect(() => {
    const data = localStorage.getItem('products');
    if (data) {
      const parsedData = JSON.parse(data) as ProductType[];
      setProducts(parsedData);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, addProductToCart, removeProductToCart }}>
      { children }
    </ProductContext.Provider>
  )
}