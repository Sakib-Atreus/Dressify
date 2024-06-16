import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, image, price, quantity, productDetails } = product;

  return (
    <div className="pt-32">
      <Helmet>
        <title>Dressify | Product Details</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="">
          <img className="h-[600px]" src={image} alt="product image" />
        </div>
        <div className="text-left items-start">
          <h1 className="text-5xl font-bold my-12">{name}</h1>
          <h3 className="text-2xl font-semibold my-2">Price: ${price}</h3>
          <h3 className="text-xl font-semibold my-2">Quantity: {quantity} (Available)</h3>
          <p className="text-xl text-gray-400 mt-6 font-medium my-2">{productDetails}</p>
          <Link
            to="/allProducts"
            className="btn bg-pink-700 text-white text-xl font-semibold my-12"
          >
            Buy Now
          </Link>
        </div>
      </div>
      <p className="text-lg font-medium text-gray-500 mt-12 p-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti
        dolore laudantium rerum ex vitae voluptas iste dolores praesentium dolor
        omnis sed illum quae nesciunt cumque autem, odio sunt ea perspiciatis
        earum possimus! Vitae quisquam earum magni voluptatum iusto impedit,
        veritatis delectus rem, quas assumenda enim eum est suscipit, quis
        perspiciatis ut repellat doloremque expedita facere? Saepe similique
        possimus perferendis repellendus, cum suscipit laudantium modi nesciunt
        odio consectetur iusto ullam totam iste eius rerum unde esse ipsa minus
        repudiandae minima? Officia, beatae ducimus! Atque sit recusandae id sed
        nihil perferendis veritatis possimus animi totam quasi. Eligendi in ipsa
        dolorem deleniti.
      </p>
    </div>
  );
};

export default ProductDetails;
