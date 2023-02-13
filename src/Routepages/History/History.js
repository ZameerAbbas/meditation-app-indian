import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container } from "../About/AboutElements";
import {
  ItemsContainer,
  Heading,
  ItemFlexWrapper,
  Carogry,
  FelxCard,
  Button,
} from "./HistoryElements";

import DeliveryProduct from "./DeliveryProduct";

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />

      <Heading>Home / My Account / My Order</Heading>
      <ItemsContainer>
        <Carogry>
          <div>
            <h1>Filter</h1>

            <ul>
              <h3>Order Status</h3>
              <li>
                <label>
                  <input type="checkbox" /> On the way
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Delivered
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Cancelled
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Returned
                </label>
              </li>
            </ul>
          </div>
          <br />
          <div>
            <h1></h1>
            <ul>
              <h3>Order Time</h3>
              <li>
                <label>
                  <input type="checkbox" /> last 30 days
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 2022
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 2021
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 2020
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 2019
                </label>
              </li>
            </ul>
          </div>
        </Carogry>
        <ItemFlexWrapper>
          <FelxCard>
            <DeliveryProduct />
          </FelxCard>
          <FelxCard>
            <DeliveryProduct />
          </FelxCard>
          <FelxCard>
            <DeliveryProduct />
          </FelxCard>
          <FelxCard>
            <DeliveryProduct />
          </FelxCard>

          <FelxCard style={{}}>
            <Button>Load more Post</Button>
          </FelxCard>
        </ItemFlexWrapper>
      </ItemsContainer>
    </Container>
  );
};

export default History;
