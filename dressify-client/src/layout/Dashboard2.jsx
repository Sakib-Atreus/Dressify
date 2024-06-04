import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaAlignJustify,
  FaUtensils,
  FaWarehouse,
} from "react-icons/fa";

const Dashboard2 = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white flex flex-col items-center justify-center">
        {/* lg navbar */}

        <Outlet className="h-screen overflow-y-scroll"></Outlet>

        <div className="h-20 lg:hidden bg-gray-300 top-0 left-0 right-0 absolute border-b-[1px] border-gray-400"></div>
        <div className="h-20 md:h-24 flex items-center  gap-5 justify-center invisible lg:visible  border-b-[1px] shadow-lg top-0 left-0 right-0 absolute"></div>
        <div>
          <div className="md:w-64 w-40 absolute z-30 top-5 md:top-2 md:left-5 left-4 lg:hidden block ">
            <a
                href="/"
                className="w-12 h-12 me-2 flex justify-between items-center gap-4"
              >
                <p className="lg:text-4xl md:text-3xl text-xl text-black font-bold">DRE<span className="text-pink-700">SS</span>IFY</p>
              </a>
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn text-2xl bg-gray-600 border-none rounded-lg text-white absolute right-5 top-5 drawer-button lg:hidden"
          >
            <FaBars />
          </label>
        </div>
      </div>

      {/* for nothing  */}

      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="bg-[#742e45] text-white overflow-hidden menu p-4 w-80 h-full mt-20 lg:mt-0">
          {/* Sidebar content here */}
          <Link to="/" className="hidden lg:block">
            <img src="" className="w-52 ml-8" alt="" />
          </Link>

          {/* Sidebar content here */}

          <div className="mt-10 ml-5 text-xl flex flex-col gap-2 flex-grow active ">
            <li>
              <NavLink
                to="/dashboard/userHome"
                className="flex items-center gap-2"
              >
                <FaWarehouse /> My Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addItem"
                className="flex items-center gap-2"
              >
                <FaUtensils /> Add Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageItems"
                className="flex items-center gap-2"
              >
                <FaWallet /> Manage Items
              </NavLink>
            </li>

            <div className="fixed bottom-20 w-full">
              <div className="divider"></div>
              <li>
                <NavLink to="/" className="flex items-center gap-2">
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/allProducts" className="flex items-center gap-2">
                  <FaAlignJustify /> Our Products
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard2;
