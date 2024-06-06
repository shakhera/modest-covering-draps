import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useProduct from "../../../hooks/useProduct";
import "./category.css";
import CategoryItem from "./CategoryItem";
import ProductCategory from "../ProductCategory/ProductCategory";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Category = () => {
  //   const categories = [
  //     {
  //       category: "Borka",
  //       name: "Black Abaya with Lace Detail",
  //       img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oAuF7oo_Rxi_ARXYLF35UCYPFAahMqD05A&s",
  //       img2: "https://img.freepik.com/free-photo/side-view-smiley-woman-wearing-sunglasses_23-2149642250.jpg?t=st=1717677187~exp=1717680787~hmac=c54fa0312b78d740b1f9d61997f7e90e1048f7db6e70109d283e5ce8a1e49678&w=360",
  //       img3: "https://etct.com.bd/public/uploads/all/aIxcQBfRYKbrzUV6T7OpWlRj4wb4j12NTkO7cb5r.webp",
  //     },

  //     {
  //       category: "Men's Pants",
  //       name: "TAPERED-CUFF 3-STRIPES PANTS",
  //       img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
  //       img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Dq5dURY-OgZiZ_qGY5qIP4JDrOmbQBDAh_FAMxjyoQ&s",
  //       img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
  //     },

  //     {
  //       category: "Men's Boot",
  //       name: "TERREX FREE HIKER COLD.RDY HIKING BOOTS",
  //       img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2ee4c27eba64258bcbaad5100e5d998_9366/Terrex_Trailmaker_Mid_COLD.RDY_Hiking_Shoes_Brown_FZ3370_01_standard.jpg",
  //       img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5350f3d583c46038534ab6d01445e2a_9366/Tactical_Lexicon_ADV_Boots_Grey_EG9386_01_standard.jpg",
  //       img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ded0bee28b249bbb19cad5000818b77_9366/Terrex_Free_Hiker_COLD.RDY_Hiking_Boots_Black_FZ3364_01_standard.jpg",
  //     },

  //     {
  //       category: "Women's Shoes",
  //       name: "Ankle Strap Sandals",
  //       img1: "https://t3.ftcdn.net/jpg/07/34/32/04/240_F_734320430_tE99njlV2C3UJzeh1BqMhzobn948HRwF.jpg",
  //       img2: "https://t3.ftcdn.net/jpg/07/33/99/94/240_F_733999479_IvUvvvWY17NIGkHNckHTwkT0nbvdggiC.jpg",
  //       img3: "https://t3.ftcdn.net/jpg/04/88/95/64/240_F_488956453_eSmlYFg4HkL2qXrzV5ykPw0Pos3JpATY.jpg",
  //     },
  //     {
  //       category: "Bag",
  //       name: "3-Stripes Backpack 2.0",
  //       img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0bb325f9cc174ea4bed7ad9e0101b682_9366/Adicolor_Archive_Backpack_Green_HE9804_01_standard.jpg",
  //       img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d6ee0177281f42f0a254acb1016aa051_9366/Defender_Backpack_Red_EX7011_01_standard.jpg",
  //       img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ba79ccb861fd4fd49e3aac9f006a6407_9366/3-Stripes_Backpack_2.0_Grey_EX6735_01_standard.jpg",
  //     },
  //     {
  //       category: "Cap",
  //       name: "Baseball Cap",
  //       img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e1e758585df14bbbb7d8aaf000c95bd7_9366/UNISEX_ORIGINALS_WASHED_BUCKET_White_CM3933_01_standard.jpg",
  //       img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/272d5d9cb7b74415a6c9ac8e015a4ccc_9366/Superlite_Hat_Black_EX7048_01_standard.jpg",
  //       img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0ce5f49aa0914deabf16adc600d09e60_9366/Baseball_Cap_Black_HD7039_01_standard.jpg",
  //     },
  //     {
  //       category: "Earphones",
  //       name: "adidas Z.N.E. 01 True Wireless Earbuds",
  //       img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e6e7967b3b24ef298f5adcc00f983ec_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5115_41_detail.jpg",
  //       img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c697ceddb0c2469aaa2eaa7101121d10_9366/RPT-01_Sport_On-Ear_Headphones_Black_CM5015_01_standard.jpg",
  //       img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
  //     },
  //     {
  //       category: "Bottle",
  //       name: "Steel Metal Bottle 1L",
  //       img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48057b65216644f683a9aa1c0172ae6e_9366/Steel_Bottle_600_ML_Black_CL6093_01_standard.jpg",
  //       img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
  //       img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
  //     },
  //   ];

  const axiosPublic = useAxiosPublic();
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categories");
      return res.data;
    },
  });

  const [products] = useProduct();

  const Borka = products.filter((item) => item.category === "Borka");
  const ManSneaker = products.filter(
    (item) => item.category === "Men's Sneaker"
  );
  const ManPant = products.filter((item) => item.category === "Men's Pants");
  const ManBoot = products.filter((item) => item.category === "Men's Boot");
  const WemanShoe = products.filter(
    (item) => item.category === "Women's Shoes"
  );
  const Bag = products.filter((item) => item.category === "Bag");
  const Cap = products.filter((item) => item.category === "Cap");
  const Earphones = products.filter((item) => item.category === "Earphones");
  const Bottle = products.filter((item) => item.category === "Bottle");

  return (
    <div>
      <SectionTitle heading="product category"></SectionTitle>

      {/* <ProductCategory items={Borka}></ProductCategory>
      <ProductCategory items={ManSneaker}></ProductCategory>
      <ProductCategory items={ManPant}></ProductCategory>
      <ProductCategory items={ManBoot}></ProductCategory>
      <ProductCategory items={WemanShoe}></ProductCategory>
      <ProductCategory items={Bag}></ProductCategory>
      <ProductCategory items={Cap}></ProductCategory>
      <ProductCategory items={Earphones}></ProductCategory>
      <ProductCategory items={Bottle}></ProductCategory> */}

      <div className="home-container mt-8">
        {/* <div className="grid grid-cols-3 gap-4"> */}
        <div className="flex flex-wrap justify-center gap-x-32 gap-y-12 md:w-10/12 mx-auto ">
          {categories.map((item, index) => (
            <CategoryItem key={index} item={item}></CategoryItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
