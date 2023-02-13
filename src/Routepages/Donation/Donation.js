import React,{useState,useEffect} from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Contact from "../../components/Contact/Contacta";
import firstimg from "./liquid-artiste-arya-SUwPo4ErQCc-unsplash.jpg";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import {
  ContainerWrapper,
  Heading,
  Paragraph,
  Subheading,
} from "../Videos/VideosElement";
import { Container } from "../About/AboutElements";
import {
  MoreDonationContianer,
  DonationCardFelx,
  DonationCard,
  DonationIcon,
  DonationH2,
  DonationP,
  Headline,
  Left,
  Span,
  Right,
} from "./DonationEvnts";
import { Link } from "react-router-dom";

const Donation = () => {
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
        <Heading>Donation Programs </Heading>
        <Subheading>Dakishina: Yoga's Practice of ``Giving Back</Subheading>
        <Paragraph>
          As yogis, we're all familiar with the ancient practice of Dakishina,
          which is an act of giving - private donation to the tracher and thier
          work.
        </Paragraph>
        <Paragraph>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release
        </Paragraph>
      </ContainerWrapper>

      <MoreDonationContianer>
        <Headline>Running Donation Programs</Headline>
        <DonationCardFelx>
          <DonationCard to="/SingleDonation">
            <DonationIcon src={firstimg} />
            <DonationH2>Help Us Promote the Healthy way of living</DonationH2>
            <DonationP>
              lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolve
            </DonationP>

            <Span>
              <Left>
                <h1>Rs.2,167</h1>
                <p>of Rs.16,000 raised</p>
              </Left>
              <Right>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 16, color: "white" }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </Right>
            </Span>
          </DonationCard>
          <DonationCard to="/SingleDonation">
            <DonationIcon src={firstimg} />
            <DonationH2>Help Us Promote the Healthy way of living</DonationH2>
            <DonationP>
              lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolve
            </DonationP>

            <Span>
              <Left>
                <h1>Rs.2,167</h1>
                <p>of Rs.16,000 raised</p>
              </Left>
              <Right>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 16, color: "white" }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </Right>
            </Span>
          </DonationCard>
          <DonationCard to="/SingleDonation">
            <DonationIcon src={firstimg} />
            <DonationH2>Help Us Promote the Healthy way of living</DonationH2>
            <DonationP>
              lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolve
            </DonationP>

            <Span>
              <Left>
                <h1>Rs.2,167</h1>
                <p>of Rs.16,000 raised</p>
              </Left>
              <Right>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 16, color: "white" }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </Right>
            </Span>
          </DonationCard>
  
          <DonationCard to="/SingleDonation">
            <DonationIcon src={firstimg} />
            <DonationH2>Help Us Promote the Healthy way of living</DonationH2>
            <DonationP>
              lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolve
            </DonationP>

            <Span>
              <Left>
                <h1>Rs.2,167</h1>
                <p>of Rs.16,000 raised</p>
              </Left>
              <Right>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 16, color: "white" }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </Right>
            </Span>
          </DonationCard>
          <DonationCard to="/SingleDonation">
            <DonationIcon src={firstimg} />
            <DonationH2>Help Us Promote the Healthy way of living</DonationH2>
            <DonationP>
              lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolve
            </DonationP>

            <Span>
              <Left>
                <h1>Rs.2,167</h1>
                <p>of Rs.16,000 raised</p>
              </Left>
              <Right>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 16, color: "white" }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </Right>
            </Span>
          </DonationCard>
          <DonationCard to="/SingleDonation">
            <DonationIcon src={firstimg} />
            <DonationH2>Help Us Promote the Healthy way of living</DonationH2>
            <DonationP>
              lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolve
            </DonationP>

            <Span>
              <Left>
                <h1>Rs.2,167</h1>
                <p>of Rs.16,000 raised</p>
              </Left>
              <Right>
                <CircularProgressbarWithChildren value={66}>
                  <div style={{ fontSize: 16, color: "white" }}>
                    <strong>66%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </Right>
            </Span>
          </DonationCard>
        </DonationCardFelx>
      </MoreDonationContianer>
      <Contact />
    </Container>
  );
};

export default Donation;
