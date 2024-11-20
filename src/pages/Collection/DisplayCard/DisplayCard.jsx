import product from "../../../assets/images/product/flip-oiler.png";
const DisplayCard = () => {
  return (
    <div className="bg-gray-200 dark:bg-black/5 mt-8 shadow-md w-full">
      <div className="text-center p-4 flex flex-col space-y-3">
        <h1 className="text-3xl font-semibold">Weekend Sales</h1>
        <p className=" text-lg">Get Up to 26% Off </p>
        <button className="bg-transparent border border-red-500 hover:bg-red-600 text-red-700 hover:text-white font-bold py-2 w-28 mx-auto">
          Shop Now
        </button>
      </div>
      <img src={product} alt="Weekend Sales" className=" w-full h-auto" />
    </div>
  );
};
export default DisplayCard;
