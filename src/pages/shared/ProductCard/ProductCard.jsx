import React, { useContext } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { img, name, price, seller, ratings, _id } = product;

  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCard = (product) => {
    // console.log(product);
    if (user && user.email) {
      const productItem = {
        productId: _id,
        email: user.email,
        name,
        price,
        img,
      };
      axiosSecure.post("/carts", productItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `item has been add to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "User not found..!!",
        text: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="">
      <div className="px-2 py-2 shadow-lg max-w-[350px] h-[505px] font-sans rounded-xl space-y-2  md:mx-auto bg-white">
        <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
          {/* <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
            <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
              30% off
            </button>
          </div> */}
          <PhotoView src={img} className="">
            <img
              className="rounded-lg bg-black/40 w-full h-full"
              src={img}
              alt="sopping product"
            />
          </PhotoView>
        </div>
        <div className="flex flex-col justify-center items-center w-[85%] mx-auto font-semibold space-y-2">
          <h6 className="text-sm md:text-base lg:text-md text-center">
            {name}
          </h6>
          <p className="text-gray-600 text-xs md:text-sm font-semibold">
            Price: {price}
          </p>
          <p className="text-gray-600 text-xs md:text-sm font-semibold">
            Manufacturel : {seller}
          </p>
          <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
        </div>
        <div className="flex justify-center  ">
          <button
            onClick={() => handleAddToCard(product)}
            className="px-6 py-2 border-2 border-red-800 text-black rounded-lg font-semibold md:text-base sm:text-sm text-[12px]  hover:text-white hover:bg-red-800 "
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
