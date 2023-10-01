import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
} from "react-router-dom";
// import {Route, Routes, Navigate} from 'react-router-dom'

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetalilPage from "./pages/ProductDetalil";
function App() {
  //Different Usage
  // const routeDefinitions = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<HomePage />}></Route>
  //     <Route path="/products" element={<ProductsPage />}></Route>
  //   </Route>
  // );
  // const router = createBrowserRouter(routeDefinitions);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        // { path: "", element: <HomePage /> },
        { index: true, element: <HomePage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "products/:id", element: <ProductDetalilPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
