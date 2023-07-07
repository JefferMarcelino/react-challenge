import { ShoppingCart } from "phosphor-react"
import { useProduct } from "../hooks/useProduct";

const NavBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { products } = useProduct();

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow">
      <nav className="max-w-6xl w-full mx-auto p-5 flex items-center justify-between">
        <a href="/" className="text-2xl">
          <span className="text-red-500">JM</span>Shop
        </a>

        <a href="/cart" className="flex items-center">
          <ShoppingCart size={32} weight="fill" />
          { products.length }
        </a>
      </nav>
    </div>
  );
};

export default NavBar;