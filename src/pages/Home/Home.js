import React from "react";
import { headerItems,products } from "../../Utils/ProductsData";
import "./Home.css";
import Banner1 from "../../BannerImage/Banner1.jpg"
import Banner2 from "../../BannerImage/Banner2.jpg"
import Banner3 from "../../BannerImage/Banner3.jpg"
import Banner4 from "../../BannerImage/Banner4.jpg"
import Banner6 from "../../BannerImage/Banner6.jpg"
import Slider from "../../components/Slider/Slider";

const Home = () => {
    const bannerImage ={Banner1,Banner2,Banner3,Banner4,Banner6}
  return (
    <div>
      <div className="item-container">
      </div>
      <div className="home-container">
        {/* <Slider images={bannerImage} /> */}
        <div className="home-row"></div>
        <div style={{ marginTop: "40px" }}></div>
      </div>
    </div>
  );
};

export default Home;
