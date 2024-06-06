import React from "react";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Cart = () => {
  const [carts, refetch] = useCart();
  //   console.log(carts);
  const axiosPublic = useAxiosPublic();

  const total = carts.reduce((total, item) => total + item.price, 0);
  const tax = (total * 7) / 100;
  const totalPrice = total + tax;

  const handleCancel = (cart) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel order",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/carts/${cart._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Cancel your order!",
              text: "Your file has been deleted.",
              icon: "success",
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="dark:bg-neutral-500">
      <div className="md:w-2/3 mx-auto ">
        <h2 className="text-3xl text-red-900 font-extrabold text-center py-4">
          Your Order Lists
        </h2>
        <div className="mx-6 md:mx-12">
          <div className="h-72 overflow-y-auto ">
            <table className="table w-full ">
              {/* head */}
              <thead className="text-xl font-bold">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th> Price</th>
                  {/* <th> Quantity</th> */}
                  <th>Cancel Order</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, index) => (
                  <tr key={cart._id} index={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={cart.img} alt="product" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {cart.name}
                      <br />
                    </td>
                    <td>{cart.price} $</td>
                    {/* <td></td> */}
                    <th className="text-center">
                      <button
                        onClick={() => handleCancel(cart)}
                        className="btn btn-md"
                      >
                        <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="  mb-10 mt-10">
        <h2 className="text-3xl text-red-900 font-extrabold text-center py-4">
          Price Calculation
        </h2>

        <div className="flex justify-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat text-center shadow-xl shadow-red-950 hover:shadow-none duration-500 px-12 rounded-full">
              <div className="stat-title">Total Products</div>
              <div className="stat-value  text-primary">{carts.length}</div>
              <div className="stat-desc">your order</div>
            </div>

            <div className="stat text-center shadow-xl shadow-red-950 hover:shadow-none duration-500 px-12 rounded-full">
              <div className="stat-title">Price</div>
              <div className="stat-value text-secondary">{total}</div>
              {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
            </div>
            <div className="stat text-center shadow-xl shadow-red-950 hover:shadow-none duration-500 px-12 rounded-full">
              <div className="stat-title">Tax</div>
              <div className="stat-value text-accent">{tax}</div>
              <div className="stat-desc">↗︎ (7%)</div>
            </div>

            <div className="stat text-center shadow-xl shadow-red-950 hover:shadow-none duration-500 px-12 rounded-full">
              <div className="stat-title">Total Price</div>
              <div className="stat-value text-error">{totalPrice}</div>
              {/* <div className="stat-desc">↘︎ 9</div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly mb-20">
        <Link to="/shop">
          <button className="bg-gradient-to-r from-red-900 to-red-400 text-white px-3 py-2 text-xl font-bold rounded-md hover:border-2 hover:border-red-700 hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-white">
            Continue Shopping
          </button>
        </Link>
        {carts.length ? (
          <Link to="/dashboard/paymentForm">
            <button className=" text-xl font-bold rounded-md border-2 px-3 py-2 border-red-600 transition duration-300 hover:text-white  hover:from-red-800 hover:to-red-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-white">
              Pay
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="text-xl font-bold rounded-md border-2 px-3 py-2 border-red-600 transition duration-300"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
