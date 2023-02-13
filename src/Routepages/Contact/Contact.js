import React,{useState,useEffect} from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Icon1 from "../../images/artwork.svg";
import Contacta from "../../components/Contact/Contacta";

import {
  ContainerWrapper,
  Heading,
  Paragraph,
  Subheading,
} from "../Videos/VideosElement";
import { Container } from "../About/AboutElements";
import {
  ContactCard,
  ContactWrapper,
  ContactH2,
  ContactIcon,
  ContactP,
  ContactFromContainer,
  FormWrapper,
  Input,
  Input1,
  Textarea,
  UserDetails,
  Check,
  Button
} from "./ContactElements"


const Contact = () => {
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
      <ContainerWrapper>
        <Heading>Talk To Us </Heading>
        <Subheading>It almost always beigns with a conversion </Subheading>
        <Paragraph>
          HAve a question? Corner? Requeast? We'd love to hear from you.Connect
          with us through the following
        </Paragraph>
      </ContainerWrapper>

      <ContactWrapper>
        <ContactCard>
          <ContactIcon src={Icon1} />
          <ContactH2>Address</ContactH2>
          <ContactP>100 Warren St</ContactP>
          <ContactP>Jersey City, NJ 07302</ContactP>
        </ContactCard>
        <ContactCard>
          <ContactIcon src={Icon1} />
          <ContactH2>Mail</ContactH2>
          <ContactP>Info@example.com</ContactP>
          <ContactP>Volunteer@exxample.com</ContactP>
        </ContactCard>
        <ContactCard>
          <ContactIcon src={Icon1} />
          <ContactH2>Hours</ContactH2>
          <ContactP>Monday -  Saturday</ContactP>
          <ContactP>8 : 00 AM - 8 : 30</ContactP>
          
        </ContactCard>
      </ContactWrapper>
  
         <ContactFromContainer>
                  <h1>Have a Qusetion? Drop Us a line! </h1>

               <FormWrapper>
                <UserDetails>
                  <Input1 type="text" placeholder="Your Name*" required/>
                  <Input type="text" placeholder="Your Name*" required/>
                </UserDetails>
                  <Textarea type="textarea" placeholder="Write here..." />
                  <label>
                    <Check type="checkbox" required />  I agree that my submitted data is being collected and stored
                  </label>
                  <Button>Send Message</Button>
               </FormWrapper>
             
               
         </ContactFromContainer>

      <Contacta />
    </Container>
  );
};

export default Contact;
