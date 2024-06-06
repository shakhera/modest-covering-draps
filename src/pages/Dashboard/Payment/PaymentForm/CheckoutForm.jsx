import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [carts, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = carts.reduce((total, item) => total + item.price, 0);
  const tax = (total * 7) / 100;
  const totalPrice = total + tax;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log("client secret", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      console.log("PaymentMethod", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          date: moment().format("YYYY-MM-DD HH:mm"),
          transactionId: paymentIntent.id,
          cartId: carts.map((item) => item._id),
          productItemId: carts.map((item) => item.productId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payment", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for your payment",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/payment/paymentHistry");
        }
      }
    }
  };
  return (
    <div>
      <form
        onClick={handleSubmit}
        className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>

        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card Details
          </label>
          <div className="p-3 border border-gray-300 rounded-md">
            <CardElement
              className="p-2"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            ></CardElement>
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || !clientSecret || !elements}
          className={`w-full py-3 text-lg font-semibold text-white rounded-md transition duration-300 ${
            stripe
              ? "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Pay Now
        </button>
        <p className="text-red-500 text-sm">{error}</p>
        {transactionId && (
          <p className="text-sm text-green-600">
            Your transaction Id : {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
