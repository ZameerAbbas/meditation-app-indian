import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  Container,
  ContainerWrapper,
  FlexCard,
  Img,
  Heading,
  Paragraph,
  Subheading,
  TicketWrapper,
  TicketFlexWrapper,
  TicketFleCard,
  Ul,
  Li,
  Counter,
  CounterWrapper,
  CounterHeading,
  CounetBtn,
  TicketFleCard2,
  TickHeading,
  Span,
  TeckSubH3,
  TeckSubH2,
  Button,
  Input,
  SilderContainer,
  SliderWrapper,
} from "./SingleEvevtElement";
import img from "../../images/hero.jpg";
import Contacta from "../../components/Contact/Contacta";
import { GoLocation, GoCalendar } from "react-icons/go";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Multiple from "./EventSlider/EventSlider";


const SingleEvent = () => {
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

      <ContainerWrapper>
        <FlexCard>
          <Heading>Live Event</Heading>
          <Subheading>Kundalini Yoga Practice Againts Bad Habits</Subheading>
          <Paragraph>
            The purpose of the Param kaivalya Dham sanstha Many modern websites
            are actually made up of a single page, they just look like multiple
            pages because
          </Paragraph>
          <Paragraph>
            The purpose of the Param kaivalya Dham sanstha Many modern websites
            are actually made up of a single page, they just look like multiple
            pages because made up of a single page, they just look like multiple
            pages because made up of a single page, they just look like multiple
            pages because
          </Paragraph>
        </FlexCard>
        <FlexCard>
          <Img src={img} />
        </FlexCard>
      </ContainerWrapper>

      <TicketWrapper>
        <TicketFlexWrapper>
          <TicketFleCard>
            <Ul>
              <Li>
                {" "}
                <GoCalendar
                  style={{
                    color: "#25fcf4",
                    fontSize: "36px",
                    marginRight: "15px",
                  }}
                />{" "}
                April 1, 2022 @ 9:00am to 01:00pm
              </Li>
              <Li>
                {" "}
                <GoLocation
                  style={{
                    color: "#25fcf4",
                    fontSize: "36px",
                    marginRight: "15px",
                  }}
                />{" "}
                5900 Glenda Blvd. Los Angeles
              </Li>
              <Li>
                {" "}
                <FaMoneyBillAlt
                  style={{
                    color: "#25fcf4",
                    fontSize: "36px",
                    marginRight: "15px",
                  }}
                />{" "}
                Rs. 490/- Per Seat
              </Li>
            </Ul>
            <br />
            <h2
              style={{ color: "#25fcf4", fontSize: "36px", fontWeight: "100" }}
            >
              How Many Seats You want?
            </h2>
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
          </TicketFleCard>
          <TicketFleCard2>
            <TickHeading>Ticket Subtotal</TickHeading>
            <Span>
              <TeckSubH3>2 Ticket @ 490 each</TeckSubH3>{" "}
              <TeckSubH2>Rs. 980/-</TeckSubH2>
            </Span>
            <TickHeading>Discount Code </TickHeading>
            <Span>
              <Input type="text" placeholder="Enter Coupon" />{" "}
              <Button>Apply</Button>
            </Span>
            <Span style={{ border: "none" }}>
              <TickHeading>Total</TickHeading>{" "}
              <TickHeading>Rs. 374/-</TickHeading>
            </Span>
            <Button>Proceed to Checkout</Button>
            <Span style={{ border: "none" }}> </Span>
          </TicketFleCard2>
        </TicketFlexWrapper>
      </TicketWrapper>

 
        <SliderWrapper>
         <Multiple />
        </SliderWrapper>


      <Contacta />
    </Container>
  );
};

export default SingleEvent;
