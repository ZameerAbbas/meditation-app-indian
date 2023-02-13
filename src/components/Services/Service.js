import React from "react";
import Icon1 from "../../images/artwork.svg";

import {
  ServicesContainer,
  ServicesCard,

  ServicesWrapper,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  Button
} from "./ServiceElements";

const Service = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Meditation Siddhis</ServicesH2>
          <ServicesP>
            Why meditation, meditation is needed the most today, today a preson
            is living...
          </ServicesP>
          <Button>Read More</Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>The Ultimate Idea</ServicesH2>
          <ServicesP>
            Ever since the creation of this universe in th param Karivaya
            Parbhu..
          </ServicesP>
          <Button>Read More</Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Ultimate Media</ServicesH2>
          <ServicesP>
            Param vichardhara ia a pure spiritual removlution given by the
            nature
          </ServicesP>
          <Button>Read More</Button>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Service;
