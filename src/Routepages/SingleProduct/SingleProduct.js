import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Contacta from "../../components/Contact/Contacta";
import { Container } from "../About/AboutElements";
import product from "./product.png";

import {
  ProductFliud,
  Heding,
  ProductConatiner,
  SliderWrapper,
  ProductPic,
  ProductDetails,
  ProductBuy,
  DetailHeading,
  Span,
  Para,
  Span1,
  CounterWrapper,
  CounterHeading,
  Counter,
  CounetBtn,
  PricingWrapper,
  CurrentPrice,
  SubtitidedPrice,
  SellPercent,
  RelatedSlider,
  CardBtn,
  AddtoFavirote,
  Button,
  MoreDetails,
} from "./SingleProductElements";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiFillShopping,
} from "react-icons/ai";
import VerticalMode from "./SliderSide";
import Multiple from "../../components/ItemSlider/slider/Slick/Mullitslider";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <Container>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />

      <ProductFliud>
        <Heding>Shop / Ayurvedic Medicine /product</Heding>

        <ProductConatiner>
          <SliderWrapper>
            <VerticalMode />
          </SliderWrapper>
          <ProductPic>
            <img src={product} />
          </ProductPic>
          <ProductDetails>
            <DetailHeading>Patanjali Vridhivadhika Vati</DetailHeading>
            <Span>
              <AiFillStar style={{ fontSize: "30px", padding: "5px" }} />
              <AiFillStar style={{ fontSize: "30px", padding: "5px" }} />
              <AiFillStar style={{ fontSize: "30px", padding: "5px" }} />
              <AiFillStar style={{ fontSize: "30px", padding: "5px" }} />
              <AiOutlineStar style={{ fontSize: "30px", padding: "5px" }} />
            </Span>
            <Para>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
            </Para>
            <br />
            <Span1>
              <Para>In Stock</Para>
              <Para>SKU:102 05</Para>
            </Span1>
          </ProductDetails>
          <ProductBuy>
            <CounterWrapper>
              <CounterHeading>Quantity</CounterHeading>
              <Counter>
                <CounetBtn style={{}} onClick={handleClick2}>
                  <AiOutlineMinus />
                </CounetBtn>
                <div style={{ color: "#fff", fontSize: "28px" }}>{counter}</div>
                <CounetBtn onClick={handleClick1}>
                  <AiOutlinePlus />
                </CounetBtn>
              </Counter>
            </CounterWrapper>
            <PricingWrapper>
              <Span1>
                <CurrentPrice>Rs.49/</CurrentPrice>
                <SubtitidedPrice>Rs.65/</SubtitidedPrice>
                <SellPercent>-30%</SellPercent>
              </Span1>
              <CardBtn>
                <Link to="/Login" style={{textDecoration:"none"}}>
                <Button>Add to Cart</Button>
                </Link>
                <AddtoFavirote>
                  <AiOutlineHeart
                    style={{ color: "#25fcf4", fontSize: "30px", padding: "0" }}
                  />
                </AddtoFavirote>
              </CardBtn>
              <MoreDetails>
              <p> <AiFillShopping
                  style={{ color: "#25fcf4", fontSize: "30px", padding: "0" }}
                />{" "}
                Other People want this.130 People have this in thier carts right
                now</p>
              </MoreDetails>
            </PricingWrapper>
          </ProductBuy>
        </ProductConatiner>
      </ProductFliud>

      <RelatedSlider>
        <h1>Related Product</h1>
        <Multiple />
      </RelatedSlider>

      <Contacta />
    </Container>
  );
};

export default SingleProduct;
