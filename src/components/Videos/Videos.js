import React from "react";
import ImgOne from "../../images/three.jpg";
import ImgTwo from "../../images/one.jpg";
import ImgThree from "../../images/two.jpg";
import ImgFour from "../../images/three.jpg";
import {
  Container,
  Boxone,
  SceTitle,
  Parag,
  Link,
  Button,
  VideosContainer,
  MainVideo,
  MainIMG,
  VideosGrid,
  GirdItem,
  ImgItems,
} from "./VideosElements";

import SimpleSlider from "./Slider";

const Videos = () => {
  return (
    <>
      <Link to="/Videos">
        <Boxone>
          <div>
            <SceTitle>Param Dham Videos</SceTitle>
            <Parag>Checkout our Videos avaliable at our site</Parag>
          </div>
          <Button>View More </Button>
        </Boxone>
        <Container>
          <VideosContainer>
            <div className="MAinconatiner">
              <MainVideo>
                <SimpleSlider />
              </MainVideo>
            </div>
            <VideosGrid>
              <GirdItem>
                <ImgItems src={ImgOne} />
              </GirdItem>
              <GirdItem>
                <ImgItems src={ImgThree} />
              </GirdItem>{" "}
              <GirdItem>
                <ImgItems src={ImgTwo} />
              </GirdItem>{" "}
              <GirdItem>
                <ImgItems src={ImgFour} />
              </GirdItem>
            </VideosGrid>
          </VideosContainer>
        </Container>
      </Link>
    </>
  );
};

export default Videos;
