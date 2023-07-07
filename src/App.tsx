import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";

// Components
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="max-w-6xl w-full mx-auto px-5 my-20">
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
