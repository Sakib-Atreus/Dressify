import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const userData = {
      name,
      email: data?.email,
      photoURL: data?.photoURL,
    };

    fetch(`https://dressify-server.vercel.app/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
    Swal.fire({
      background: "black",
      position: "center",
      icon: "success",
      title: "User name has been updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="p-28 pb-32">
      <Helmet>
        <title>Dressify | Profile</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-pink-700">
          Welcome to your profile!
        </h1>
        <div className="flex justify-center my-6">
          <img className="w-40 h-40 rounded-full" src={data?.image} alt="" />
        </div>
        <h2 className="text-3xl font-bold text-pink-800">{data?.name}</h2>
        <h3 className="text-xl font-semibold">{data?.email}</h3>
      </div>
      <h1 className="text-3xl font-bold mb-7">Update Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="">User Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Email:</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col mt-12 w-3/2 items-center">
          <input
            type="submit"
            value="Update Profile"
            className="py-2 px-4 bg-slate-950 text-white text-xl font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
