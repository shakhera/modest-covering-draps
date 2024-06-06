import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const CartTable = ({ cart, index }) => {
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useCart();

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
    <tr>
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
        <button onClick={() => handleCancel(cart)} className="btn btn-md">
          <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default CartTable;
