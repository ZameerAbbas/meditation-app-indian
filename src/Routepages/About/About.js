import React,{useState,useEffect} from "react";
import Contacta from "../../components/Contact/Contacta";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Babaji from "../../images/babaji.svg";
import volunteer from "../../images/voluteers.svg";
import yogateacher from "../../images/yoga-teacher.svg";
import support from "../../images/support.svg";
import timer from "../../images/event-calendar.svg";
import quote from "../../images/quote.png"

import {
  Container,
  Topwrapper,
  Heading,
  Subheading,
  Paragraph,
  OwnerWrapper,
  BioContainer,
  Para,
  PhotoView,
  Img,
  FlexContainer,
  FelxCard,
  FelxWrapper,
  FlexHeading,
  Icon,
  FelxPara,
  TestiContainer,
  TextiFlexWrapper,
  TextiFlexWrapper2,
  TextiFlexCard,
  TestPara,
  Quotes ,
  Quotes2 ,
  Name
} from "./AboutElements";

const About = () => {
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
      <Topwrapper>
        <Heading>Experience Yoga At</Heading>
        <Subheading>Our Param Dham Studio</Subheading>
        <Paragraph>
          The purpose of the Param kaivalya Dham sanstha Many modern websites
          are actually made up of a single page, they just look like multiple
          pages because they contain components which render like separate
          pages. Many modern websites are actually made up of a single page,
          they just look like multiple pages because they contain components
          which render like separate pages. These are usually referred to as
          SPAs -
        </Paragraph>
      </Topwrapper>
      <OwnerWrapper>
        <BioContainer>
          <Heading>Life introduction</Heading>
          <Subheading>Paramukt Acharya Shri Radheshyam Ji'so</Subheading>
          <Para>
            Acharya Gurudev shri was bron on 2nd september 1985 in a village
            named siswal named after the holy pilgrimage site of lord shiva of
            mahabarata period.this village comes around hisar tehsil admapur
            city of haryana provice.born in afarmer's family acharya ji had a
            religious and karma-oriented background since birth. from childhood,
            grandfahter used to teach him religious lessons, being the youngest
            of the five siblings, everyone has been loving and curious since
            childhood
          </Para>
          <Para>
            being a shiva devotee family fond of going to the shiva in childhood
            and watching religious serials like Ramayana Mahabharata, and
            jaishri Krishna on Tv regularly going to the shiva temple offering
            water to the mythical shilling, he got this legacy from his
            grandfather, and from there spirituality started in his life
            enlightenment was planned from previous lives coincidentally shiva
            worship did the works in this birth and since childhood, the seeds
            of the search for truth were planted in him
          </Para>
        </BioContainer>
        <PhotoView>
          <Img src={Babaji} />
        </PhotoView>
      </OwnerWrapper>

      <FlexContainer>
        <FelxWrapper>
          <FelxCard>
            <Icon src={yogateacher}></Icon>
            <FlexHeading>29</FlexHeading>
            <FelxPara>Yoga Teacher</FelxPara>
          </FelxCard>
          <FelxCard>
            <Icon src={volunteer}></Icon>
            <FlexHeading>22</FlexHeading>
            <FelxPara>volunteer</FelxPara>
          </FelxCard>
          <FelxCard>
            <Icon src={support}></Icon>
            <FlexHeading>14</FlexHeading>
            <FelxPara>Support Group</FelxPara>
          </FelxCard>
          <FelxCard>
            <Icon src={timer}></Icon>
            <FlexHeading>8</FlexHeading>
            <FelxPara>Sepcial Events</FelxPara>
          </FelxCard>
        </FelxWrapper>
      </FlexContainer>

      <TestiContainer>
        <Heading>Testimonails</Heading>
        <Subheading>What People Saying About Our Ashram</Subheading>
        <TextiFlexWrapper>
          <TextiFlexCard>

            <TestPara>
              <Quotes src={quote} />
              <br />
              previous lives coincidentally shiva worship did the works in this
              birth and since childhood, the seeds of the search for truth w
              <Quotes2  src={quote} />
            </TestPara>
            <Name>Sakshi Advani</Name>
          </TextiFlexCard>
          <TextiFlexCard>
          <TestPara>
              <Quotes src={quote} />
              <br />
              previous lives coincidentally shiva worship did the works in this
              birth and since childhood, the seeds of the search for truth w
              <Quotes2  src={quote} />
            </TestPara>
            <Name>Sakshi Advani</Name>
          </TextiFlexCard>
          <TextiFlexCard>
          <TestPara>
              <Quotes src={quote} />
              <br />
              previous lives coincidentally shiva worship did the works in this
              birth and since childhood, the seeds of the search for truth w
              <Quotes2  src={quote} />
            </TestPara>
            <Name>Sakshi Advani</Name>
          </TextiFlexCard>
        </TextiFlexWrapper>

        <TextiFlexWrapper2>
        
          <TextiFlexCard>
          <TestPara>
              <Quotes src={quote} />
              <br />
              previous lives coincidentally shiva worship did the works in this
              birth and since childhood, the seeds of the search for truth w
              <Quotes2  src={quote} />
            </TestPara>
            <Name>Sakshi Advani</Name>
          </TextiFlexCard>
          <TextiFlexCard>
          <TestPara>
              <Quotes src={quote} />
              <br />
              previous lives coincidentally shiva worship did the works in this
              birth and since childhood, the seeds of the search for truth w
              <Quotes2  src={quote} />
            </TestPara>
            <Name>Sakshi Advani</Name>
          </TextiFlexCard>
        </TextiFlexWrapper2>
      </TestiContainer>

      <Contacta />
    </Container>
  );
};

export default About;
