import { Routes, Route } from "react-router-dom";
import Header from "@/components/header/Header";

import PostFiles from "@/pages/PostFiles";

import Product from "@/components/product/Product";
import ProductDetails from "@/components/product/ProductDetails";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/get-files" element={<Product />}></Route>
        <Route path="/post-files" element={<PostFiles />}></Route>
        <Route path="/product-details/:id" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
};

export default Home;
