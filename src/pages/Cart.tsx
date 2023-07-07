import { Trash } from "phosphor-react";
import { ProductType } from "../data/products";
import { useProduct } from "../hooks/useProduct";

const Cart = () => {
  const { products, removeProductToCart } = useProduct();

  return (
    <div className="w-full flex flex-wrap gap-6">
      <div className="w-full max-w-2xl border border-gray-200 p-5 rounded">
        <h2 className="font-bold text-2xl mb-5">O seus productos</h2>
        <div className="w-full flex flex-col gap-6">
          {
            products.length > 0 ? products.map((product: ProductType, index) => {
              return (
                <div className="w-full flex gap-6 items-center" key={ index }>
                  <div className="bg-gray-200 rounded flex justify-center items-center max-w-[120px]">
                    <img src={ product.image } alt={ product.name } />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="w-full flex flex-wrap justify-between font-bold gap-1 md:gap-4">
                      <div className="block">
                        <h3 className="flex-1">{ product.name }</h3>
                      </div>
                      <div className="flex flex-col gap-1">
                        { product.price.toFixed(2) } MT
                      </div>
                    </div>
                    <p className="text-gray-700">{ product.description }</p>
                  </div>
                  <div className="h-full self-baseline cursor-pointer mt-3">
                    <Trash 
                      size={24} 
                      weight="fill"
                      onClick={ () => {
                        removeProductToCart(index)
                      }}
                    />
                  </div>
                </div>
              );
            }) : <p>Você não tem productos no carrinho</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart;