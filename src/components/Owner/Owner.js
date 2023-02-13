import React from "react";

import Icon1 from "../../images/babaji.svg";

import {
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  Button,
} from "./OwnerElements";
const Owner = () => {
  return (
    <>
      <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>
          Paramukt Acharya Shri Radheshyam Ji's Life Introduction
        </ServicesH2>
        <ServicesP>
          Acharya Gurudev shri was bron on 2nd september 1985 in a village named
          siswal named after the holy pilgrimage site of lord shiva of
          mahabarata period.this village comes around hisar tehsil admapur city
          of haryana provice.born in afarmer's family acharya ji had a religious
          and karma-oriented background since birth. from childhood, grandfahter
          used to teach him religious lessons, being the youngest of the five
          siblings, everyone has been loving and curious since childhood
        </ServicesP>
        <Button>Read More</Button>
      </ServicesCard>
    </>
  );
};

export default Owner;
