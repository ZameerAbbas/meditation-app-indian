import React from "react";
import "./DonationProduct.css";
import Image from "./img.jpg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";


function DonationProduct() {
  return (
    <div className="DonationProduct">
      <img src={Image} />
      <h2>Help Us Promote the Healthy Way of Living</h2>
      <p>lorem ipsum' will uncover many web sites still in their infancy.</p>

      <br />
      <span>
        <div className="Left">
          <h1>Rs.2,167</h1>
          <p>of Rs.16,000 raised</p>
        </div>
        <div className="Right">
          <CircularProgressbarWithChildren value={66}>
            <div style={{ fontSize: 16, color: "white" }}>
              <strong>66%</strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </span>
    </div>
  );
}

export default DonationProduct;
