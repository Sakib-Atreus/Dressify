import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [Products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://dressify-server.vercel.app/myProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [user]);

  const handleSearch = () => {
    fetch(`https://dressify-server.vercel.app/searchText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  const handleDelete = (_id, email) => {
    console.log(email);
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
        fetch(`https://dressify-server.vercel.app/myProducts/${email}`, {
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
              const remaining = Products.filter(
                (product) => product._id !== _id
              );
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-jobs-container pt-24">
      <h1 className="text-center m-2 text-pink-600 text-opacity-60 p-4 font-black text-4xl rounded-full">
        My Product{"'"}s
      </h1>
      <div className="search-box text-center">
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
        <div className="overflow-x-auto">
          <table className="table lg:w-full table-auto">
            {/* head */}
            <thead className="">
              <tr className="text-lg">
                <th className="bg-black border rounded text-center text-pink-600">
                  #
                </th>
                <th className="bg-black border rounded text-center text-pink-600">
                  Product Name
                </th>
                <th className="bg-black border rounded text-center text-pink-600">
                  Category{" "}
                </th>
                <th className="bg-black border rounded text-center text-pink-600">
                  Price
                </th>
                <th className="bg-black border rounded text-center text-pink-600">
                  Quantity
                </th>
                <th className="bg-black border rounded text-center text-pink-600">
                  Edit
                </th>
                <th className="bg-black border rounded text-center text-pink-600">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="text-black text-center bg-black">
              {Products.map((product, index) => (
                <tr key={product}>
                  <td className="text-center border-black text-black bg-red-200">
                    {index + 1}
                  </td>
                  <td className="text-center border-black text-black bg-red-100 font-bold">
                    {product.name}
                  </td>
                  <td className="text-center border-black text-black bg-red-200">
                    {product.category}
                  </td>
                  <td className="text-center border-black text-black bg-red-100">
                    {product.price}
                  </td>
                  <td className="text-center border-black text-black bg-red-200">
                    {product.quantity}
                  </td>
                  <td className="text-center border-black text-black bg-red-100">
                    <Link to={`/dashboard/editProduct/${product._id}`}>
                      <button className="btn rounded-full bg-gradient-to-l from-pink-600 text-white ">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="text-center border-black text-black bg-red-300">
                    {" "}
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn bg-gradient-to-r from-pink-700 text-black"
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

export default MyProducts;
