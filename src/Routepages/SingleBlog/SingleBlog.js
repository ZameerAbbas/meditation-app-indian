import React, { useState,useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container } from "../About/AboutElements";
import pic from "../../images/madir.jpg";
import img from "../../images/tawar.jpg";
import facebook from '../../images/Social/fb.svg'
import inst from '../../images/Social/insta.svg'
import linkedin from '../../images/Social/linkedin.svg'
import telegram from '../../images/Social/telegram.svg'
import twitter from '../../images/Social/twitter.svg'
import {
  ContainerWrapper,
  Heading,
  Paragraph,
  SocialIcons,
  IconList,
  Sicon,
  Subheading,
  Flxleft,
  Flxright,
  Img,
  Column2,
  Heading2,
  Event,
  Edate,
  EMoth,
  EImg,
  Edetail,
  Eheading,
  ContainerTwo,
  TopFlex,
  BottomFlex,
  BottomContainer,
  CardRight,
  Input,
  Heading1,
  CardLeft,
  Heading3,
  Headingbotm,
  Input1,
  Button,
  Button1,
} from "./SingleBolgElement";
import Contacta from "../../components/Contact/Contacta";
import { Textarea } from "../Contact/ContactElements";

const SingleBlog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Container>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ContainerWrapper>
        <Flxleft>
          <Heading>01-11-2022</Heading>
          <Subheading>
            Regigion turning in business, says the science of ideology
          </Subheading>
          <Paragraph>
            The purpose of the Param kaivalya Dham sanstha Many modern websites
            are actually made up of a single page, they just look like multiple
            pages because
          </Paragraph>
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
          <Paragraph>
            The purpose of the Param kaivalya Dham sanstha Many modern websites
            are actually made up of a single page, they just look like multiple
            pages because made up of a single page, they just look like multiple
            pages because made up of a single page, they just look like multiple
            pages because
          </Paragraph>
          <SocialIcons>
             <h3 style={{ color: "#25fcf4", marginLeft:"5px"}}>Share this post</h3>
          <IconList>
              
              <a href="">
                <Sicon src={facebook } /></a>
            </IconList>
            <IconList>
            <a href="">  <Sicon src={inst } /></a>
            </IconList>
            <IconList>
              <a href=""><Sicon src={linkedin } /></a>
            </IconList>
            <IconList>
             <a herf=""> <Sicon src={telegram } /></a>
            </IconList>
            <IconList>
              <a href=""><Sicon src={twitter } /></a>
                
            </IconList>
          </SocialIcons>
        </Flxleft>
        <Flxright>
          <Img src={pic} />

          <Column2>
            <Heading2>Popular Posts</Heading2>
            <Event>
              <Edate>
                18 <br />
                <EMoth>OCT</EMoth>
              </Edate>
              <EImg src={img} />
              <Edetail>
                <Eheading>Lorem Ipsum is simply and type setting</Eheading>
              </Edetail>
            </Event>
            <Event>
              <Edate>
                18 <br />
                <EMoth>OCT</EMoth>
              </Edate>
              <EImg src={img} />
              <Edetail>
                <Eheading>Lorem Ipsum is simply and type setting</Eheading>
              </Edetail>
            </Event>
            <Event>
              <Edate>
                18 <br />
                <EMoth>OCT</EMoth>
              </Edate>
              <EImg src={img} />
              <Edetail>
                <Eheading>Lorem Ipsum is simply and type setting</Eheading>
              </Edetail>
            </Event>
            <Event>
              <Edate>
                18 <br />
                <EMoth>OCT</EMoth>
              </Edate>
              <EImg src={img} />
              <Edetail>
                <Eheading>Lorem Ipsum is simply and type setting</Eheading>
              </Edetail>
            </Event>
          </Column2>
        </Flxright>
      </ContainerWrapper>
      <ContainerTwo>
        <TopFlex>
          <CardLeft>
            <Heading1>Leave a comment</Heading1>
            <Input type="text" placeholder="Your Name*" />
            <Input type="email" placeholder="Your Email*" />
            <Textarea placeholder="Your Comment*" />
            <p>
              <label style={{ color: "#fff", fontSize: "20px" }}>
                <input type="checkbox"  /> By using this from you agree with the
                storage and handling of your data by this website
              </label>
            </p>
            <Button>Leave a comment</Button>
          </CardLeft>
          <CardRight>
            <Heading1>You May Also Like </Heading1>
            <Img src={pic} />
            <Heading3>
              Know the Worth of your birth for which you got human life?
            </Heading3>
            <p style={{ color: "#fff", fontSize: "20px", marginTop:"15px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <Button style={{marginTop:"30px"}}>Read More</Button>
          </CardRight>
        </TopFlex>
        <BottomFlex>
          <BottomContainer>
            <Headingbotm>Subscribe to Our Blog </Headingbotm>
            <br/> 
            <br/>
            <p style={{ color: "#fff", fontSize: "20px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard
            </p>
             <div >
             <Input1 type="email" placeholder="Your Email*" />
            <Button1>Subscribe</Button1>
             </div>
          </BottomContainer>
        </BottomFlex>
      </ContainerTwo>

      <Contacta />
    </Container>
    </>
  );
};

export default SingleBlog;
