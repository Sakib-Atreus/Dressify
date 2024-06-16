import { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { Helmet } from "react-helmet-async";

const AllProducts = () => {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://dressify-server.vercel.app/allProducts")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("https://dressify-server.vercel.app/allProducts")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  const handleSearch = () => {
    fetch(`https://dressify-server.vercel.app/searchText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  return (
    <div className="max-w-7xl mx-auto pt-28">
      <Helmet>
        <title>Dressify | All Products</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center">All Product{"'"}s</h1>

      <div className="text-center mt-6">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1 rounded-lg bg-pink-100 text-black"
          placeholder="Product Name "
        />{" "}
        <button
          onClick={handleSearch}
          className="btn btn-sm bg-pink-400 text-black m-4 hover:text-white"
        >
          Search
        </button>
      </div>

      <div className="my-16 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-y-12 lg:mx-4 md:mx-4 justify-center items-center ">
        {products.map((product) => (
          <SingleProduct
            key={product?._id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
