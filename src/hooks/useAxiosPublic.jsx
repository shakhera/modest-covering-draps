import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://modest-covering-draps-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
