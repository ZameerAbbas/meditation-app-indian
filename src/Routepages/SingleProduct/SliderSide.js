import React, { Component } from "react";

import Slider from "react-slick";
import product from "./product.png";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      
        transform: "rotate(-90deg)",
        fontSize: "20px",
        width: "70px",
        top: "-50px",
        height: "70px",
        zIndex: "2",
        left:"90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100px",
        background: "rgba(20,20,20,0.4)",
      
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "70px",
        height: "70px",
        zIndex: "2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100px",
        background: "rgba(20,20,20,0.4)",
        transform: "rotate(-90deg)",
        left: "90px",
        top: "92%"
    
      }}
      onClick={onClick}
    />
  );
}

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            style={{
              width: "150px",
              height: "100px",
              padding: "15px",
              marginLeft: "50px",
            }}
            src={product}
          />
        </div>
        <div>
          <img
            style={{
              width: "150px",
              height: "100px",
              padding: "15px",
              marginLeft: "50px",
            }}
            src={product}
          />
        </div>
        <div>
          <img
            style={{
              width: "150px",
              height: "100px",
              padding: "15px",
              marginLeft: "50px",
            }}
            src={product}
          />
        </div>
        <div>
          <img
            style={{
              width: "150px",
              height: "100px",
              padding: "15px",
              marginLeft: "50px",
            }}
            src={product}
          />
        </div>
        <div>
          <img
            style={{
              width: "150px",
              height: "100px",
              padding: "15px",
              marginLeft: "50px",
            }}
            src={product}
          />
        </div>
        <div>
          <img
            style={{
              width: "150px",
              height: "100px",
              padding: "15px",
              marginLeft: "50px",
            }}
            src={product}
          />
        </div>
      </Slider>
    );
  }
}
