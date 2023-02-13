import React from "react";
import Leftimg from "./madir.jpg";
import mandir from '../../images/left0.jpg'
import {
  Container,
  Heading,
  ContentContainer,
  ImagDiv,
  Image,
  New,
  ContentDiv,
  Para,
  Button,
} from "./HowstartElements";

const Howstart = () => {
  return (
    <Container>
      
      <Heading>How did It Start?</Heading>
      <ContentContainer>
      <New src={mandir} />
      
        <ContentDiv>
          The institution has been started on the symbolic order of param
          kaivalya Prabhu in all our Puranas, every effort has been made to
          explain the truth. Our teachers saints rishis prophets philosophers
          etc have all brought knowledge and the entire knowledge of eternal
          truth to human beings through different beliefs and facts but man
          could not assimilate the existence of that knowledge and the ent
          entire humanity of the world have become distinct today this is the
          beginning of the memory of the lost humanity and the ultimate purpose
          of man 
          beginning of the memory of the lost humanity and the ultimate purpose
          of man 
          <Para>to save humanity from going into the pit and to spend the
          knowledge of...</Para>
          
          <Button>Read More</Button>
        </ContentDiv>
      </ContentContainer>
    </Container>
  );
};

export default Howstart;
