import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Collection from "../pages/Collection/Collections/Collection";
import SignUp from "../pages/Login/SignUp";
import Blogs from "../pages/Blogs/Blogs";
import Shop from "../pages/Collection/Shop/Shop";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import Cart from "../pages/Dashboard/Cart/Cart";
import PaymentForm from "../pages/Dashboard/Payment/PaymentForm/PaymentForm";
import Payment from "../Layout/Payment";
import PaymentHistry from "../pages/Dashboard/Payment/PaymentHistry/PaymentHistry";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import AboutUs from "../pages/Home/AboutUs/AboutUs";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },

      // {
      //   path: "/collection",
      //   element: <Collection></Collection>,
      // },

      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "paymentForm",
        element: <PaymentForm></PaymentForm>,
      },
    ],
  },
  {
    path: "dashboard/payment",
    element: (
      <PrivateRoutes>
        <Payment></Payment>
      </PrivateRoutes>
    ),
    children: [
      // {
      //   path: "/cart",
      //   element: <Cart></Cart>,
      // },
      // {
      //   path: "payments",
      //   element: <Payment></Payment>,
      // },
      {
        path: "paymentHistry",
        element: <PaymentHistry></PaymentHistry>,
      },
      {
        path: "myOrder",
        element: <MyOrder></MyOrder>,
      },
    ],
  },
]);
export default routers;
