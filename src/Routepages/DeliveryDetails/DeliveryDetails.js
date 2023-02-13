import React,{useState,useEffect} from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Contacta from "../../components/Contact/Contacta";
import { Container } from "../About/AboutElements";
import image from "./product.png";
import image1 from "./cardimage.png";
import { FiDownload } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import ProgressSteps from "./Scroll";
import {
  Heading,
  DeliverItemContainer,
  ItemWrapper,
  MainItem,
  ItemDivTop,
  ItemDivBottom,
  Left,
  Img,
  ImDetail,
  Right,
  BottomLeft,
  BottomCenter,
  BottomRight,
  MoreItemsWrapper,
} from "./DeliveryDetailsElements";
import { Link } from "react-router-dom";

const DeliveryDetails = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
       <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Heading>Home / My Account / My Order</Heading>
      <DeliverItemContainer>
        <ItemWrapper>
          <MainItem>
            <ItemDivTop>
              <Left>
                <div>
                  <Img src={image} />
                </div>
                <ImDetail>
                  <h1>Patanjali Vridhivadhika vati</h1>
                  <p>Color : Brown</p>
                  <p>Item Dimension 10 &#215; 5 &#215;5 Centimeters </p>
                </ImDetail>
              </Left>
              <Right>
                <h1>Order Amount 1190/-</h1>
                <p>Your items has been delivered</p>
              </Right>
            </ItemDivTop>
            <ItemDivBottom>
              <BottomLeft>
                <h1>Delivery Address</h1>
                <h3>Jason Roy </h3>
                <p>20 Hunt Rd Street,Hilladale</p>
                <p>City North Dakota - 12529</p>
              </BottomLeft>
              <BottomCenter>
                <ProgressSteps />
              </BottomCenter>
              <BottomRight>
                <h1>
                  {" "}
                  <FiDownload /> Download
                </h1>
                <h2>
                  <AiOutlineQuestionCircle /> Need Help
                </h2>
              </BottomRight>
            </ItemDivBottom>
          </MainItem>
          <MoreItemsWrapper>
            <h1 style={{ marginBottom: "60px" }}>Items in this Order</h1>

            <ItemDivTop>
              <Left>
                <div>
                  <Img src={image1} />
                </div>
                <ImDetail>
                  <h1>Patanjali Vridhivadhika vati</h1>
                  <p>Color : Brown</p>
                  <p>Item Dimension 10 &#215; 5 &#215;5 Centimeters </p>
                </ImDetail>
              </Left>
              <Right>
                <h1 style={{ marginTop: "40px" }}>RS. 190/-</h1>
              </Right>
            </ItemDivTop>
            <ItemDivTop style={{ marginTop: "30px" }}>
              <Left>
                <div>
                  <Img src={image1} />
                </div>
                <ImDetail>
                  <h1>Patanjali Vridhivadhika vati</h1>
                  <p>Color : Brown</p>
                  <p>Item Dimension 10 &#215; 5 &#215;5 Centimeters </p>
                </ImDetail>
              </Left>
              <Right>
                <h1 style={{ marginTop: "40px" }}>RS. 190/-</h1>
              </Right>
            </ItemDivTop>
            <ItemDivTop style={{ marginTop: "30px" }}>
              <Left>
                <div>
                  <Img src={image1} />
                </div>
                <ImDetail>
                  <h1>Patanjali Vridhivadhika vati</h1>
                  <p>Color : Brown</p>
                  <p>Item Dimension 10 &#215; 5 &#215;5 Centimeters </p>
                </ImDetail>
              </Left>
              <Right>
                <h1 style={{ marginTop: "40px" }}>RS. 190/-</h1>
              </Right>
            </ItemDivTop>
            <ItemDivTop style={{ marginTop: "30px" }}>
              <Left>
                <div>
                  <Img src={image1} />
                </div>
                <ImDetail>
                  <h1>Patanjali Vridhivadhika vati</h1>
                  <p>Color : Brown</p>
                  <p>Item Dimension 10 &#215; 5 &#215;5 Centimeters </p>
                </ImDetail>
              </Left>
              <Right>
                <h1 style={{ marginTop: "40px" }}>RS. 190/-</h1>
              </Right>
            </ItemDivTop>
            <ItemDivTop style={{ marginTop: "30px" }}>
              <Left>
                <div>
                  <Img src={image1} />
                </div>
                <ImDetail>
                  <h1>Patanjali Vridhivadhika vati</h1>
                  <p>Color : Brown</p>
                  <p>Item Dimension 10 &#215; 5 &#215;5 Centimeters </p>
                </ImDetail>
              </Left>
              <Right>
                <h1 style={{ marginTop: "40px" }}>RS. 190/-</h1>
              </Right>
            </ItemDivTop>
          </MoreItemsWrapper>
          <Link
            to="/Shop"
            style={{
              textDecoration: "none",
              fontSize: "16px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
            }}
          >
            <IoIosArrowRoundBack style={{ fontSize: "36px", color: "#fff" }} />
            Continue Shoping
          </Link>
        </ItemWrapper>
      </DeliverItemContainer>

      <Contacta />
    </Container>
  );
};

export default DeliveryDetails;
