import React from "react";
import img from "../../images/tawar.jpg";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import {
  Shado,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Heading2,
  Subtitle,
  BtnWrapper,
  Button,
  Column2,
  Event,
  Edate,
  Day,
  EMoth,
  Eheading,
  EImg,
  Edetail,
  Etime,
  ELocation,
} from "./InfoElements";

const Info = () => {
  return (
    <>
      <Shado></Shado>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>Welcome</Heading>
                <Subtitle>
                  Param dham is a kind of vidyapeech,gurukul, university where
                  workshops af all human qualities and ideals have been run, it
                  is the direction goal of the institution to make all the
                  thought, feeling and sanskars of human beings perfect through
                  spiritual method. param kaivaly dham is the only laboratory to
                  reveal the original and beauty of religions, param kaivalya
                  dham is the center of worldly achievements as well as
                  spiritual upliftment
                </Subtitle>
                <BtnWrapper>
                  <Button>Read More</Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <Heading2>Upcoming Events</Heading2>
              <Event>
                <Edate>
                  18 <br />
                  <EMoth>OCT</EMoth>
                </Edate>
                <EImg src={img} />
                <Edetail>
                  <Eheading>Honoring The Day 2019</Eheading>
                  <Etime>
                    <BiTime /> 9:30 am to 4:30
                  </Etime>
                  <ELocation>
                    <GoLocation />
                    jaipur(rajistan)
                  </ELocation>
                </Edetail>
              </Event>
              <Event>
                <Edate>
                  18 <br />
                  <EMoth>OCT</EMoth>
                </Edate>
                <EImg src={img} />
                <Edetail>
                  <Eheading>Honoring The Day 2019</Eheading>
                  <Etime>
                    <BiTime /> 9:30 am to 4:30
                  </Etime>
                  <ELocation>
                    <GoLocation /> jaipur(rajistan)
                  </ELocation>
                </Edetail>
              </Event>
              <Event>
                <Edate>
                  18 <br />
                  <EMoth>OCT</EMoth>
                </Edate>
                <EImg src={img} />
                <Edetail>
                  <Eheading>Honoring The Day 2019</Eheading>
                  <Etime>
                    <BiTime /> 9:30 am to 4:30
                  </Etime>
                  <ELocation>
                    <GoLocation /> jaipur(rajistan)
                  </ELocation>
                </Edetail>
              </Event>
              <Event>
                <Edate>
                  18 <br />
                  <EMoth>OCT</EMoth>
                </Edate>
                <EImg src={img} />
                <Edetail>
                  <Eheading>Honoring The Day 2019</Eheading>
                  <Etime>
                    <BiTime /> 9:30 am to 4:30
                  </Etime>
                  <ELocation>
                    <GoLocation /> jaipur(rajistan)
                  </ELocation>
                </Edetail>
              </Event>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
