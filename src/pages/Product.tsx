import { useParams } from "react-router-dom"
import products, { ProductType } from "../data/products";
import { useState, useEffect } from "react";
import { useProduct } from "../hooks/useProduct";

const Product = () => {
  const { productId } = useParams();
  const [ productData, setProductData ] = useState<ProductType>();
  const { addProductToCart } = useProduct();

  useEffect(() => {
    if (productId) {
      setProductData(products[Number(productId) - 1]);
    }
  }, [productId]);

  console.log(productData?.details.split("<endline>"))
  
  if (!productData) {
    return (
      <div className="h-full w-full flex justify-center items-center text-4xl">Ops!</div>
    )
  }

  return (
    <div className="w-full flex flex-wrap gap-6">
      <div className="w-full max-w-md bg-gray-200 rounded flex justify-center items-center">
        <img className="w-full" src={ productData?.image } alt={ productData?.name } />
      </div>

      <div className="w-full max-w-lg flex flex-col gap-2">
        <h2 className="font-bold text-2xl">{ productData?.name }</h2>
        <p className="text-gray-700">{ productData?.description }</p>

        <ul className="flex flex-col w-full gap-1 flex-1">
          { 
            productData?.details.split("<endline>").map((line, index) => {
              return (
                <li key={ index }>{ line }</li>
              )
            })
          }
        </ul>

        <div>
          <button 
            onClick={ () => {
              addProductToCart({ ...productData });
            } }
            className="border border-gray-500 text-gray-800 rounded-3xl py-1 px-5 w-min hover:border-transparent hover:bg-green-800 hover:text-white transition-colors">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;