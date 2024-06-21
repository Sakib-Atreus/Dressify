import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const data = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const productDetails = form.productDetails.value;
    console.log(name, price, quantity, productDetails);
    // form.reset();
    console.log(data.price);
    const update = { name, price, quantity, productDetails };
    fetch(`https://dressify-server.vercel.app/allProducts/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          Swal.fire({
            background: "black",
            position: "center",
            icon: "success",
            title: "Your toy has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  useEffect(() => {
    document.title = `Dressify | Edit | ${data.name}`;
  }, [data]);
  return (
    <div>
      <h1 className="text-center m-2 bg-black text-pink-800 p-4 font-black text-4xl rounded-full">
        Update Product!
      </h1>
      {/* <h1 className="text-center text-black font-black text-xl m-2">Name :
      {data?.name}</h1> */}
      <form
        onSubmit={handleUpdate}
        className=" items-center grid justify-center w-full"
      >
        <h2 className="text-black font-bold">Name :</h2>
        <input
          type="text"
          name="name"
          defaultValue={data?.name}
          placeholder="Type here"
          className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center"
        />
        <h2 className="text-black font-bold">Price :</h2>
        <input
          type="text"
          name="price"
          defaultValue={data?.price}
          placeholder="Type here"
          className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center"
        />
        <br />
        <h2 className="text-black font-bold">Quantity :</h2>
        <input
          type="text"
          name="quantity"
          defaultValue={data?.quantity}
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs bg-black text-white"
        />
        <br />
        <h2 className="text-black font-bold">Product Details :</h2>
        <input
          type="text"
          name="productDetails"
          defaultValue={data?.productDetails}
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs bg-black text-white"
        />
        <input
          className="btn border mb-4 mt-8 font-bold text-pink-600 bg-black rounded-full w-full max-w-xs"
          type="submit"
        />
      </form>
    </div>
  );
};
export default UpdateItem;
