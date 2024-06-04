import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://dressify-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="navbar fixed lg:z-10 md:z-10 z-10 font-semibold bg-opacity-10 bg-black text-black uppercase">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allProducts">All Products</Link>
              </li>
              <li>
                <Link to="/myProducts">My Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {user && (
                <li className="">
                  <Link to="/dashboard/userHome">
                    <p className="">Dashboard</p>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <div className="text-left w-12 h-12">
              <a
                href="/"
                className="w-12 h-12 me-2 flex justify-between items-center gap-4"
              >
                <p className="lg:text-4xl md:text-3xl text-xl">
                  DRE<span className="text-pink-700">SS</span>IFY
                </p>
              </a>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allProducts">All Products</Link>
            </li>
            {user && (
              <li className="">
                <Link to="/myProducts">
                  <p className="">My Products</p>
                </Link>
              </li>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {user && (
              <li className="">
                <Link to="/dashboard/userHome">
                  <p className="">Dashboard</p>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link>
                <button onClick={handleLogOut} className="">
                  SIGN OUT
                </button>
              </Link>
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16 mx-2">
                  <Link to={`/profile/${userInfo?._id}`}>
                    <img src={user.photoURL} alt="" />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex justify-center items-center gap-2 me-2 text-xl"
              >
                <h1>
                  <span className="text-pink-700">L</span>OGIN
                </h1>
                <MdLogin className="text-pink-700" />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
