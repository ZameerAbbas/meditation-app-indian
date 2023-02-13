import React, { useState,useEffect} from "react";
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
  RatingConatiner,
  FlexWrapper,
  RatingFlexCard,
  Span,
  FelxHeading,
  Para,
  Progress,
  ProgressContainer,
  ButtonTop,
  Button2,
  Butns,
  FelxHeading1,
  SliderConatiner,
  ContactFromContainer,
  FormWrapper,
  Button,
  Input1,
  Input,
  UserDetails,
  Textarea,
  Check,
} from "./SingleDonationElement";
import img from "../../images/hero.jpg";
import Multiple from "./Slider/Mullitslider";
import Contacta from "../../components/Contact/Contacta";

const SingleDonation = () => {
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
        <FlexCard>
          <Heading>Donation Programs</Heading>
          <Subheading>Help Us Promote the Healthy Way of Living </Subheading>
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

      <RatingConatiner>
        <FlexWrapper>
          <RatingFlexCard>
            <Span>
              <FelxHeading>$2,167 </FelxHeading>
              <Para>of $16,000 raised </Para>
            </Span>
            <ProgressContainer>
              <Progress />
            </ProgressContainer>
            <br />
            <ButtonTop>$25.00</ButtonTop>
            <Span>
              <Button2>$25.00</Button2>
              <Butns>$50.00</Butns>
              <Butns>$100.00</Butns>
              <Butns>Custom</Butns>
            </Span>
          </RatingFlexCard>
          <RatingFlexCard>
            <ContactFromContainer>
              <FormWrapper>
                <FelxHeading1>Personal Info </FelxHeading1>
                <UserDetails>
                  <Input1 type="text" placeholder="Your Name*" required />
                  <Input type="text" placeholder="Last Name*" required />
                </UserDetails>
                <Textarea type="text" placeholder="Email" />
                <label>
                  <Check type="checkbox" required /> I agree that my submitted
                  data is being collected and stored
                </label>
                <Button>Donate</Button>
              </FormWrapper>
            </ContactFromContainer>
          </RatingFlexCard>
        </FlexWrapper>
      </RatingConatiner>

      <SliderConatiner>
        <Multiple />
      </SliderConatiner>

      <Contacta />
    </Container>
  );
};

export default SingleDonation;
