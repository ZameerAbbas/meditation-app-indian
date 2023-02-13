import React, { Component } from "react";
import Slider from "react-slick";
import imad from  '../../images/images.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import ImgOne from "../../images/three.jpg";
import ImgTwo from "../../images/one.jpg";
import ImgThree from "../../images/two.jpg";
import ImgFour from "../../images/three.jpg";


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
        zIndex:"2",
        marginRight: "-20px",
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
        marginLeft: "-20px",
        zIndex:"99"
      }}
      onClick={onClick}
    />
  );
}
  

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="conatiner">
        <Slider {...settings}>
          <div>
           <img   className="img" src={imad}/>
          </div>
          <div>
           <img className="img" src={ImgOne}/>
          </div>
          <div>
           <img className="img" src={ImgThree}/>
          </div>
          <div>
           <img className="img" src={ImgFour}/>
          </div>
          <div>
           <img className="img" src={ImgTwo}/>
          </div>
        

        
        </Slider>
      </div>
    );
  }
}
