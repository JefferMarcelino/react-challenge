import bannerImg from "../assets/banner.jpg";
import products, { ProductType } from "../data/products";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full h-96">
        <img
          src={ bannerImg }
          alt="Um banner"
          className="h-full rounded-xl object-cover"
        />
      </div>

      <div className="w-full">
        <h2 className="text-lg font-bold">Nossos melhores productos!</h2>

        <div className="flex gap-8 md:gap-4 flex-wrap my-5 justify-center lg:justify-between">
          {
            products && products.map((product: ProductType, index) => {
              return (
                <Product { ...product } id={ index + 1 } key={ index } />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;