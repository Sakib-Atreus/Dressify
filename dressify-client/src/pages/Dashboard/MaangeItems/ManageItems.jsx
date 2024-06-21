import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
//  import { useLoaderData } from "react-router-dom";

const ManageItems = () => {
  //  const step =useLoaderData();

  const { user } = useContext(AuthContext);
  const [products, setproducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetch(`https://dressify-server.vercel.app/myProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
        document.title = "My Products";
      });
  }, [user]);

  const handleSearch = () => {
    fetch(`https://dressify-server.vercel.app/searchText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
      });
  };

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover it!",
      textColor: "#0000",
      icon: "warning",
      iconColor: "red",
      background: "black",
      Color: "#545454",
      showCancelButton: true,
      confirmButtonColor: "#F40D0D",
      cancelButtonColor: "#gray",
      // cancelButtonAriaLabel:'white',
      confirmButtonText: "Yes, delete it!",
      confirmButtonTextColor: "black",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dressify-server.vercel.app/myProducts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = products.filter(
                (product) => product._id !== _id
              );
              setproducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-jobs-container ">
      <Helmet>
        <title>Dressify | Manage Products</title>
      </Helmet>
      <h1 className="text-center m-2 text-black p-4 font-black text-4xl rounded-full">
        My Product{"'"}s
      </h1>
      <div className="search-box text-center my-6">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1 rounded-lg bg-pink-200 text-black"
          placeholder="Product Name"
        />{" "}
        <button
          onClick={handleSearch}
          className="btn btn-sm bg-pink-600 text-black m-4 hover:text-white"
        >
          Search
        </button>
        <div className="overflow-x-auto mb-12">
          <table className="table lg:w-full table-auto table-xs table-pin-rows table-pin-cols">
            {/* head */}
            <thead className="">
              <tr className="text-lg ">
                <th className="bg-black border rounded text-center text-white">
                  #
                </th>
                <th className="bg-black border rounded text-center text-white">
                  Product Name
                </th>
                <th className="bg-black border rounded text-center text-white">
                  Seller
                </th>
                <th className="bg-black border rounded text-center text-white">
                  Sub-category{" "}
                </th>
                <th className="bg-black border rounded text-center text-white">
                  Price
                </th>
                <th className="bg-black border rounded text-center text-white">
                  Quantity
                </th>
                <th className="bg-black border rounded text-center text-white">
                  Edit
                </th>
                <th className="bg-black border rounded text-center text-white">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="text-black text-center bg-black">
              {products.map((product, index) => (
                <tr key={product}>
                  <td className="text-center border-black text-black bg-red-200">
                    {index + 1}
                  </td>
                  <td className="text-center border-black text-black bg-red-100 font-bold">
                    {product.name}
                  </td>
                  <td className="text-center border-black text-black bg-red-200">
                    {product.sellerName}
                  </td>
                  <td className="text-center border-black text-black bg-red-100">
                    {product.category}
                  </td>
                  <td className="text-center border-black text-black bg-red-200">
                    {product.price}
                  </td>
                  <td className="text-center border-black text-black bg-red-100">
                    {product.quantity}
                  </td>
                  <td className="text-center border-black text-black bg-red-200">
                    <Link to={`/dashboard/editProduct/${product._id}`}>
                      <button className="btn rounded-full bg-pink-600 text-black hover:text-white">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="text-center border-black text-black bg-red-100">
                    {" "}
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn bg-pink-700 text-black hover:text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
