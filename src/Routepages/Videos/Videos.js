import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  ContainerWrapper,
  Heading,
  Subheading,
  Paragraph,
  VidesNav,
  Ul,
  Li,
  MainVideoConatiner,
} from "./VideosElement";
import Contacta from "../../components/Contact/Contacta";
import PremiumVideos from "./PremiumVideos/PremiumVideos";
import FreeVideos from "./FreeVedios/FreeVideos";
export const Videos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ContainerWrapper>
        <Heading>India's Leadiing Socio-Spritiual-Cultural Videos</Heading>
        <Subheading>
          Our Param Dham is a devotional channel of its own kind, evoking divine
        </Subheading>
        <Paragraph>
          The purpose of the Param kaivalya Dham sanstha Many modern websites
          are actually made up of a single page, they just look like multiple
          pages because they
        </Paragraph>
        <Paragraph>
          The purpose of the Param kaivalya Dham sanstha Many modern websites
          are actually made up of a single page, they just look like multiple
          pages because they contain components which render like separate
          pages. Many modern websites are actually made up of a single page,
          they -
        </Paragraph>

        <MainVideoConatiner>
          <Router>
            <div>
              <VidesNav>
                <Ul>
                  <Li>
                    <Link
                      to="/"
                      exact
                      style={{ textDecoration: "none", color: "#25fcf4" }}
                    >
                      FreeVideos
                    </Link>
                  </Li>
                  <Li>
                    <Link 
                      to="/PremiumVideos"
                      style={{ textDecoration: "none", color: "#25fcf4" }}
                    >
                      PremiumVideos
                    </Link>
                  </Li>
                </Ul> 
              </VidesNav>
              
              <Switch>
                <Route exact path="/">
                  <FreeVideos />
                </Route>
                <Route path="/PremiumVideos">
                  <PremiumVideos />
                </Route>
              </Switch>
            </div>
          </Router>
        </MainVideoConatiner>
      </ContainerWrapper>
      <Contacta />
    </Container>
  );
};
