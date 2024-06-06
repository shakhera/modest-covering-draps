import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://modest-covering-draps-server.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
