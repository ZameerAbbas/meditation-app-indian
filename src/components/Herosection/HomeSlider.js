import React, { Component } from "react";
import Slider from "react-slick";
import HeroSection from ".";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2500,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <HeroSection />
          </div>
          <div>
            <HeroSection />
          </div>
          <div>
            <HeroSection />
          </div>
        
        </Slider>
      </div>
    );
  }
}
