import React from "react";
import "./DeliveryProduct.css";
import Image from "../Shop/cardimage.png";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
function DeliveryProduct() {
  return (
    <div className="HistoryShopProduct">
      <Link
        to="DeliveryDetails"
        style={{ color: "#fff", textDecoration: "none" }}
      >
        <div className="FlexConatiner">
          <div className="Productflex">
            <div className="imgContainer">
              <img src={Image} />
            </div>
            <div className="imgcontetn">
              <h1>Patanjali Vridhivadhika vati</h1>
              <p>color: Brown</p>
              <p>Item Dimension 10 &#215; 5 &#215;5 Centimeters </p>
            </div>
          </div>
          <div className="RightFlex">
            <div className="RightContent">
              <h1>Order Amount 1190/-</h1>
              <p>Delivered on 18 Nav 2022 </p>
            </div>
            <div className="Render">
              <FaGreaterThan style={{fontSize:"30px"}} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DeliveryProduct;
