import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import {
  Container,
  WelComeContainer,
  LoginWrapper,
  CloseWrapper,
  Heading,
  SubHeading,
  NameConatiner,
  Input1,
  Input,
  Para,
  Button,
} from "./SignupElements";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Signup = () => {
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
      <WelComeContainer>
        <LoginWrapper>
          <CloseWrapper to="./" >
            <AiOutlineCloseCircle style={{color:"#25fcf4", fontSize:"36px",} } />
          </CloseWrapper>
          <Heading>Welcome to Our Param Dham</Heading>
          <SubHeading>
            First Login Your free account then start shopping
          </SubHeading>
          <NameConatiner>
            <Input1 type="text" placeholder="First Name*" />
            <Input1 type="text" placeholder="Last Name*" />
          </NameConatiner>
          <Input type="email" placeholder="Email*" />
          <Input type="password" placeholder="Password*" />
          <Button>Create Account</Button>
          <Para>
            if you already have an account?{" "}
            <Link
              style={{ color: "#25fcf4", textDecoration: "none" }}
              to="/Login"
            >
              Sign in here
            </Link>
          </Para>
        </LoginWrapper>
      </WelComeContainer>
    </Container>
  );
};

export default Signup;
