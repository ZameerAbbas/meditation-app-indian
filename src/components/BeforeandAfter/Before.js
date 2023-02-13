import React from "react";
import {
  Container,
  BEforeContainer,
  Heading,
  Heading1,
  FlexBox,
  FlexBox2,
  FelxWrapper,
  Text,
  FelxWrapper2,
  Center,
  Icon,
  AfterConatiner,
} from "./BeforeElements";

const Before = () => {
  return (
    <Container>
      <BEforeContainer>
        <FlexBox>
          <Heading>01</Heading>
          <FelxWrapper>
            <Text>
            Purpose of param karivaya Dham to convey the supreme secret of the
            world-famous holy book shri Git to the people as they are, the words
            spoken by shri Bhagavan
            </Text>
          </FelxWrapper>
        </FlexBox>
        <FlexBox>
          <Heading>03</Heading>
          <FelxWrapper>
            To direct the path of human liberation by leading a successful life
            along with joy, power, and properity.
          </FelxWrapper>
        </FlexBox>
        <FlexBox>
          <Heading>05</Heading>
          <FelxWrapper>
            To develop the country and society based on human values.
          </FelxWrapper>
        </FlexBox>
      </BEforeContainer>
      <Center>
        <Icon></Icon>
      </Center>
      <AfterConatiner>
        <FlexBox2>
          <Heading1>02</Heading1>
          <FelxWrapper2>
            For physical, mental, social, economic, and spritiual upliftments,
            jagriti Mission is to be run all over the
          </FelxWrapper2>
        </FlexBox2>
        <FlexBox2>
          <Heading1>04</Heading1>
          <FelxWrapper2>
            To make every person discover the diving khowledege(atimajnan) by
            reaching the body through the mind and from the mind to soul
          </FelxWrapper2>
        </FlexBox2>
        <FlexBox2>
          <Heading1>06</Heading1>
          <FelxWrapper2>
            To Lead only the selfless and directionless youth power towords the
            welfare of the nation, to build a beautiful society by typing the
            heart of all religions in one thread.
          </FelxWrapper2>
        </FlexBox2>
      </AfterConatiner>
    </Container>
  );
};

export default Before;
