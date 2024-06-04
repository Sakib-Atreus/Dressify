import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const TopCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dressify-server.vercel.app/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div className="max-w-7xl mx-auto mb-40">
      <h1 className="my-8 text-4xl font-bold text-center mb-12">
        <span className="text-pink-700">Top</span> Collections
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-y-24 lg:mx-4 justify-center items-center ">
        {products?.slice(0, 3)?.map((product) => (
          <SingleProduct key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
