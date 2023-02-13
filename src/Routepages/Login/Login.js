import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Button } from "../Blogs/BlogElements";
import {
  Container,
  WelComeContainer,
  LoginWrapper,
  Heading,
  SubHeading,
  Input,
  Para,
  CloseWrapper,
} from "./LoginElements";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Login = () => {
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
          <CloseWrapper to="./">
            <AiOutlineCloseCircle
              style={{ color: "#25fcf4", fontSize: "36px" }}
            />
          </CloseWrapper>
          <Heading>Welcome Back!</Heading>
          <SubHeading>
            First Login Your free account then start shopping
          </SubHeading>
          <Input type="email" placeholder="Email*" />
          <Input type="password" placeholder="Password*" />
          <Button>Login</Button>
          <Para>
            Dont't have an account?{" "}
            <Link
              style={{ color: "#25fcf4", textDecoration: "none" }}
              to="/Signup"
            >
              Sign up here
            </Link>
          </Para>
        </LoginWrapper>
      </WelComeContainer>
    </Container>
  );
};

export default Login;
