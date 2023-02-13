import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "./product";
import { Container } from "../About/AboutElements";
import Contact from "../../components/Contact/Contacta";
import {
  ContainerWrapper,
  Heading,
  Paragraph,
  Subheading,
} from "../Videos/VideosElement";
import {
  ItemsContainer,
  Carogry,
  ItemFlexWrapper,
  FelxCard,
} from "./ShopElement";

const Shop = () => {
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
      <ContainerWrapper>
        <Heading>Shop With Us</Heading>
        <Subheading>New Ways to find best deals on Our Para Dham</Subheading>
        <Paragraph>
          The purpose of the Param kaivalya Dham sanstha Many modern websites
          are actually made up of a single page, they just look like multiple
          pages because
        </Paragraph>
      </ContainerWrapper>

      <ItemsContainer>
        <Carogry>
          <div>
            <h1>Carogry</h1>
            <ul>
              <li>Book</li>
              <li>Ayurvedic Medicine</li>
              <li>Beatuy & Grooming</li>
            </ul>
          </div>
          <div>
            <h1>Customer Rating</h1>
            <ul>
              <li>4 star & above</li>
              <li>3 star & above</li>
              <li>2 star & above</li>
              <li>1 star & above</li>
            </ul>
          </div>
          <div>
            <h1>Price</h1>
            <ul>
              <li>under $100</li>
              <li>$100 $200</li>
              <li>$200 $500</li>
              <li>$500 $1000</li>
              <li>above $1000</li>
            </ul>
          </div>
        </Carogry>
        <ItemFlexWrapper>
          <FelxCard>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </FelxCard>
          <FelxCard>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </FelxCard>
    
        </ItemFlexWrapper>
      </ItemsContainer>
      <Contact />
    </Container>
  );
};

export default Shop;
