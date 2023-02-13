import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../product";
import "./Slick.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background:
          "linear-gradient(90deg, rgba(21,68,111,1) 0%, rgba(3,51,94,1) 100%)",
        width: "70px",
        height: "70px",
        borderRadius: "100px",
        fontSize: "25px",
        justifyContent: "center",
        alignItems: "center",
      
        marginRight: "-60px",
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
        display: "flex",
        background:
          "linear-gradient(90deg, rgba(3,51,94,1) 0%, rgba(21,68,111,1) 100%)",
        width: "70px",
        height: "70px",
        borderRadius: "100px",
        fontSize: "25px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "-60px",
      }}
      onClick={onClick}
    />
  );
}

export default class Multiple extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 1,
      background: "rgba(20,20,20,0.9) ",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 2080,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
       
        {
          breakpoint:  1140,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 756,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Slider">
        <Slider {...settings}>
          <div className="Product">
            <Product />
          </div>
          <div className="Product">
            <Product />
          </div>{" "}
          <div className="Product">
            <Product />
          </div>{" "}
          <div className="Product">
            <Product />
          </div>{" "}
          <div className="Product">
            <Product />
          </div>{" "}
          <div className="Product">
            <Product />
          </div>{" "}
          <div className="Product">
            <Product />
          </div>
        </Slider>
      </div>
    );
  }
}
