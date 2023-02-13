import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Icon1 from "../../images/madir.jpg";
import Contact from "../../components/Contact/Contacta";
import { GoLocation, GoCalendar } from "react-icons/go";
import firstimg from "./mike-labrum-fvl4b1gjpbk-unsplash.jpg";

import {
  ContainerWrapper,
  Heading,
  Paragraph,
  Subheading,
} from "../Videos/VideosElement";
import { Container } from "../About/AboutElements";
import {
  MoreEventContianer,
  EventCardFelx,
  EventCard,
  EventIcon,
  Icons,
  EventH2,
  EventP,
  Button,
  Button1,
} from "./EventsElements";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ContainerWrapper>
        <Heading>Events List </Heading>
        <Subheading>
          Watch more than 200 informative & inspiring sessions for Yoga and
          social life{" "}
        </Subheading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Paragraph>
        <Paragraph>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release
        </Paragraph>
      </ContainerWrapper>
      <MoreEventContianer>
        <EventCardFelx>
          <EventCard to="SingleEvent">
            <EventIcon src={firstimg} />
            <EventH2>Honoring the Day 2022</EventH2>
            <EventP>
              <Icons>
                <GoLocation />
              </Icons>{" "}
              Aperil 1, 2022 @ 9:00 to 01:00pm
            </EventP>
            <EventP>
              <Icons>
                {" "}
                <GoCalendar />
              </Icons>
              5900 Glendale Blvd.Los Anageles
            </EventP>

            <Button>Book Now</Button>
          </EventCard>
          <EventCard to="/SingleEvent">
            <EventIcon src={firstimg} />
            <EventH2>Honoring the Day 2022</EventH2>
            <EventP>
              <Icons>
                <GoLocation />
              </Icons>{" "}
              Aperil 1, 2022 @ 9:00 to 01:00pm
            </EventP>
            <EventP>
              <Icons>
                {" "}
                <GoCalendar />
              </Icons>
              5900 Glendale Blvd.Los Anageles
            </EventP>

            <Button>Book Now</Button>
          </EventCard>
          <EventCard to="/SingleEvent">
            <EventIcon src={firstimg} />
            <EventH2>Honoring the Day 2022</EventH2>
            <EventP>
              <Icons>
                <GoLocation />
              </Icons>{" "}
              Aperil 1, 2022 @ 9:00 to 01:00pm
            </EventP>
            <EventP>
              <Icons>
                {" "}
                <GoCalendar />
              </Icons>
              5900 Glendale Blvd.Los Anageles
            </EventP>

            <Button>Book Now</Button>
          </EventCard>
          {/* </EventCardFelx>
        <EventCardFelx> */}
          <EventCard to="/SingleEvent">
            <EventIcon src={firstimg} />
            <EventH2>Honoring the Day 2022</EventH2>
            <EventP>
              <Icons>
                <GoLocation />
              </Icons>{" "}
              Aperil 1, 2022 @ 9:00 to 01:00pm
            </EventP>
            <EventP>
              <Icons>
                {" "}
                <GoCalendar />
              </Icons>
              5900 Glendale Blvd.Los Anageles
            </EventP>

            <Button>Book Now</Button>
          </EventCard>
          <EventCard to="/SingleEvent">
            <EventIcon src={firstimg} />
            <EventH2>Honoring the Day 2022</EventH2>
            <EventP>
              <Icons>
                <GoLocation />
              </Icons>{" "}
              Aperil 1, 2022 @ 9:00 to 01:00pm
            </EventP>
            <EventP>
              <Icons>
                {" "}
                <GoCalendar />
              </Icons>
              5900 Glendale Blvd.Los Anageles
            </EventP>

            <Button>Book Now</Button>
          </EventCard>
          <EventCard to="/SingleEvent">
            <EventIcon src={firstimg} />
            <EventH2>Honoring the Day 2022</EventH2>
            <EventP>
              <Icons>
                <GoLocation />
              </Icons>{" "}
              Aperil 1, 2022 @ 9:00 to 01:00pm
            </EventP>
            <EventP>
              <Icons>
                {" "}
                <GoCalendar />
              </Icons>
              5900 Glendale Blvd.Los Anageles
            </EventP>
            <Button>Book Now</Button>
          </EventCard>
        </EventCardFelx>
        <Button1>Load More Post</Button1>
      </MoreEventContianer>

      <Contact />
    </Container>
  );
};

export default Events;
