import React from "react";
import "./top-products.css";

import p1 from "./product1.png";
import p2 from "./product2.png";
import p3 from "./product3.png";
import p4 from "./product4.png";
import p5 from "./product5.png";
import p6 from "./product6.png";
import p7 from "./product7.png";
import p8 from "./product8.png";
import ProductCard from "../../../../../shared/p-card/p-card";

const TopProducts = (props) => {
  return (
    <div className="container main-content">
      <div className="header">
        <h1>Top Picks For You</h1>
        <p>
          find a bright ideal to suit your taste with out great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="product-container">
        <ProductCard
          img={p1}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"Bollard lamp"}
        ></ProductCard>

        <ProductCard
          img={p2}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"wall lamp"}
        ></ProductCard>

        <ProductCard
          img={p3}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"Diesel V2 Hoodie"}
        ></ProductCard>

        <ProductCard
          img={p4}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"Diesel V2 Hoodie"}
        ></ProductCard>

        <ProductCard
          img={p5}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"Grey Winter Hoodie"}
        ></ProductCard>

        <ProductCard
          img={p6}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"Round neck T-shirtp"}
        ></ProductCard>

        <ProductCard
          img={p7}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"Diesel V1 Hoodie"}
        ></ProductCard>

        <ProductCard
          img={p8}
          price={"7.00"}
          discountPrice={"12.00"}
          name={"Diesel V1 Hoodie"}
        ></ProductCard>
      </div>
    </div>
  );
};

export default TopProducts;
