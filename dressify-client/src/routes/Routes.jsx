import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import Dashboard from "../layout/Dashboard";
import Error from "../pages/Error/Error";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/MaangeItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Profile from "../pages/Profile/Profile";
import AllProducts from "../pages/AllProducts/AllProducts";
import MyProducts from "../pages/MyProducts/MyProducts";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Dashboard2 from "../layout/Dashboard2";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile/:id",
        element: <Profile></Profile>,
        loader: ({ params }) =>
          fetch(`https://dressify-server.vercel.app/user/get/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allProducts/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://dressify-server.vercel.app/allProducts/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard2></Dashboard2>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard/userHome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/dashboard/manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "/dashboard/editProduct/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`https://dressify-server.vercel.app/editProduct/${params.id}`),
      },
    ],
  },
]);

export default router;
