import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { _id, name, price, productDetails, image } = product;

  return (
    <div className="card w-96 shadow-xl">
      <figure>
        <img className="w-full h-96" src={image} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{productDetails.slice(0, 60)}</p>
        <div className="card-actions justify-end">
          <button className="">
            <Link to={`/allProducts/${_id}`} className="btn bg-pink-700 text-white text-xl">See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
