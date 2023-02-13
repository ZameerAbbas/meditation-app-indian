import React from "react";
import "./EventProduct.css";
import { GoLocation, GoCalendar } from "react-icons/go";
import Image from "./img.jpg";
import { Ul, Li } from "../SingleEvevtElement";
function EventProduct() {
  return (
    <div className="MAin-item">
      <img src={Image} />

      <h2>Honoring the Day 2022</h2>
      <Ul>
        <Li>
          {" "}
          <GoCalendar
            style={{
              color: "#25fcf4",
              fontSize: "34px",
              marginRight: "15px",
            }}
          />{" "}
          April 1, 2022 @ 9:00am to 01:00pm
        </Li>
        <Li>
          {" "}
          <GoLocation
            style={{
              color: "#25fcf4",
              fontSize: "34px",
              marginRight: "15px",
            }}
          />{" "}
          5900 Glenda Blvd. Los Angeles
        </Li>
      </Ul>

      <br />
      <button>Book Now</button>
    </div>
  );
}

export default EventProduct;
