import React from "react";
import Slider from "../../components/Home/Slider";
import Categories from "../../components/Home/Categories";
import CartProductContainer from "../../components/Products/CartProductContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatures from "../../components/Brands/BrandFeatures";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <CartProductContainer title="الاكثر مبيعا" btn_title="المزيد" />
      <DiscountSection />
      <CartProductContainer title="احدث الازياء" btn_title="المزيد" />
      <BrandFeatures title="اشهر الماركات" btn_title="المزيد"  />
    </div>
  );
};

export default HomePage;
