import type { ProductType } from "../data/products";
import { useProduct } from "../hooks/useProduct";

interface ProductComponent extends ProductType {
  id: number;
}

const Product: React.FC<ProductComponent> = ({ image, name, price, description, id, details }) => {
  const { addProductToCart } = useProduct();

  return (
    <div className="max-w-none sm:max-w-[250px] w-full">
      <div className="bg-gray-200 rounded flex justify-center items-center">
        <img src={ image } alt={ name } />
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <div className="w-full flex justify-between font-bold gap-4">
          <a href={ `/product/` + id.toString() } className="flex-1">
            <h3 className="">{ name }</h3>
          </a>
          <div className="flex">
            { price.toFixed(2) } MT
          </div>
        </div>
        <p className="text-gray-700">{ description }</p>

        <button 
          onClick={ () => {
            addProductToCart({ image, name, price, description, details });
          } }
          className="border border-gray-500 text-gray-800 rounded-3xl py-1 px-5 w-min hover:border-transparent hover:bg-green-800 hover:text-white transition-colors">
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;