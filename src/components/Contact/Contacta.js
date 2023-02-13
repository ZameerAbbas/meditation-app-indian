import React from "react";
import facebook from "../../images/Social/fb.svg";
import inst from "../../images/Social/insta.svg";
import linkedin from "../../images/Social/linkedin.svg";
import telegram from "../../images/Social/telegram.svg";
import twitter from "../../images/Social/twitter.svg";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import {
  Container,
  ContactWrapper,
  FlexCard,
  Heading,
  Ul,
  Li,
  Para,
  Text,
  Icon,
  SocialIcons,
  IconList,
  Sicon,
  Copyright,
  NavLinks,
} from "./contactElement";

const Contacta = () => {
  return (
    <Container>
      <ContactWrapper>
        <FlexCard>
          <Heading>Related Links</Heading>
          <Ul>
            <Li>
              <NavLinks to="./">Home </NavLinks>
            </Li>
            <Li>
              <NavLinks to="/About">About </NavLinks>
            </Li>
            <Li>
              <NavLinks to="/Videos">Videos</NavLinks>
            </Li>
            <Li>
              {" "}
              <NavLinks to="/Shop">Shop</NavLinks>
            </Li>
            <Li>
              <NavLinks to="/Blog">Blog</NavLinks>
            </Li>
            <Li>
              {" "}
              <NavLinks to="/Events">Events</NavLinks>
            </Li>

            <Li>
              {" "}
              <NavLinks to="/Donation">Donation</NavLinks>{" "}
            </Li>
            <Li>
              <NavLinks to="/Contact">Contact</NavLinks>
            </Li>
          </Ul>
        </FlexCard>
        <FlexCard>
          <Heading>Contact Us</Heading>
          <Para>
            <Text>Temp 1:77/ed Glendale</Text>
            <Text>Blvd.los Angeles, 28400</Text>
          </Para>
          <br /> <br />
          <Para>
            <Text>Temp 1:77/ed Glendale</Text>
            <Text>Blvd.los Angeles, 28400</Text>
          </Para>
        </FlexCard>
        <FlexCard>
          <Heading>Adress</Heading>
          <Icon>
            {" "}
            <AiOutlineMail /> info@paramkaivaydam.com
          </Icon>{" "}
          <br /> <br />
          <Icon>
            {" "}
            <AiFillPhone /> 0987654321{" "}
          </Icon>
          <SocialIcons>
            <IconList>
              <a href="">
                <Sicon src={facebook} />
              </a>
            </IconList>
            <IconList>
              <a href="">
                {" "}
                <Sicon src={inst} />
              </a>
            </IconList>
            <IconList>
              <a href="">
                <Sicon src={linkedin} />
              </a>
            </IconList>
            <IconList>
              <a herf="">
                {" "}
                <Sicon src={telegram} />
              </a>
            </IconList>
            <IconList>
              <a href="">
                <Sicon src={twitter} />
              </a>
            </IconList>
          </SocialIcons>
        </FlexCard>
      </ContactWrapper>
      <br />
      <br />

      <Copyright>
        Copyright &#169; Param Dham 2022. All Right Reserved.
      </Copyright>
    </Container>
  );
};

export default Contacta;
