import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payment = [], refetch } = useQuery({
    queryKey: ["payment", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });
  return [payment, refetch];
};

export default usePayment;
