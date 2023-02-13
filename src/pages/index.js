import React, { useState } from "react";
import Blog from "../components/Blog/Blog";
import HeroSection from "../components/Herosection";
import Howstart from "../components/Howstart/Howstart";
import { Container } from "./Elemebt";

import Info from "../components/InfoSection/Info";
import Itemstock from "../components/ItemSlider/Itemstock";
import NavBar from "../components/NavBar";
import Owner from "../components/Owner/Owner";
import Service from "../components/Services/Service";
import Sidebar from "../components/Sidebar/Sidebar";
import Videos from "../components/Videos/Videos";
import Contact from "../components/Contact/Contacta";
import Before from "../components/BeforeandAfter/Before";
import SimpleSlider from "../components/Herosection/HomeSlider";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      {/* <HeroSection /> */}
      <SimpleSlider />
      <Info />
      <Service />
      <Itemstock />
      <Videos/>
      <Owner />
      <Howstart />
      <Before />
      <Blog />
      <Contact/>
   
      
    </Container>
  );
};

export default Home;
