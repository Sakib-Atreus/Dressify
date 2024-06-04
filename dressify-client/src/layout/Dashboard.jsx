import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaAlignJustify,
  FaUtensils,
  FaWarehouse 
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-white min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {" "}
        {/* flex flex-col items-center justify-center */}
        {/* Page content here */}
        <Outlet className="h-screen overflow-y-scroll"></Outlet>
        <div className="h-20 lg:hidden bg-gray-600 top-0 left-0 right-0 absolute border-b-[1px] border-gray-400"></div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#742e45]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full">
          {/* Sidebar content here */}
          <>
            <li>
              <NavLink to="/dashboard/userHome">
                <FaWarehouse></FaWarehouse>My Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItem">
                <FaUtensils></FaUtensils>Add Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageItems">
                <FaWallet></FaWallet>Manage Items
              </NavLink>
            </li>
          </>

          <div className="fixed bottom-20">
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allProducts">
                <FaAlignJustify></FaAlignJustify>Our Products
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
