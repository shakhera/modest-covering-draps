import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Collection from "../pages/Collection/Collections/Collection";
import SignUp from "../pages/Login/SignUp";
import Blogs from "../pages/Blogs/Blogs";
import Shop from "../pages/Collection/Shop/Shop";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default routers;
