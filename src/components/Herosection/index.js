import React from "react";
import bgImg from "../../images/banner image.png";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Button,
  FiveDot,
  Dots,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={bgImg} type="jpg" />
      </HeroBg>
      <HeroContent>
        <HeroP>Perform meditation at our</HeroP>
        <HeroH1>Param Dham</HeroH1>
        <HeroBtnWrapper>
          <Button>Read More</Button>
        </HeroBtnWrapper>
      </HeroContent>

      <FiveDot>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
      </FiveDot>
    </HeroContainer>


  );
};

export default HeroSection;
