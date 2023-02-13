import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container } from "../About/AboutElements";
import {
  UserConatiner,
  UserWrapper,
  UserDP,
  H1,
  UserDetails,
  Label,
  Input,
  Button
} from "./ProfileElements";

const Profile = () => {
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
      <UserConatiner>
        <UserWrapper>
          <UserDP>
            <H1>JR</H1>
          </UserDP>
          <UserDetails>
            <Label>
              Personal Infromation
              <br />
              <Input type="Text" placeholder="Jason Roy" />
            </Label>
            <br />
            <br />
            <br />
            <Label>
              Email Adress
              <br />
              <Input type="Text" placeholder="JasonRoy2015@gmail.com" />
            </Label>
            <br />
            <br />
            <br />
            <Label>
              Mobile Number
              <br />
              <Input type="Text" placeholder="098765431" />
            </Label>
             <br/>
             <br/>
             <br/>
            <Button>Submit</Button>
          </UserDetails>
        </UserWrapper>
      </UserConatiner>
    </Container>
  );
};

export default Profile;
