import React from "react";
import { RiArrowDropDownLine, RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Felx,
  Img,
  HoverItem,
  Postion,
  Ul,
  Li,
  Log,
} from "./profileElements";
import language from "../../../images/language.svg";
import cart from "../../../images/cart.svg";
import user from "../../../images/user.svg";
import user1 from "./user.png";
import logout from "./logout.png";
import History from "./hestory.png";
const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Felx>
          <Img src={language} /> <span>Hindi</span>
        </Felx>
        <Felx>
          Cart (22) <Img src={cart} />
        </Felx>
        <Felx className="curser">
          Wellcome,{" "}
          <span>
            Rishu
            <RiArrowDropDownLine />
          </span>
          <Img src={user} />
          <HoverItem className="hover">
            <Postion>
              <Ul>
              <Link to="/Profile"  style={{textDecoration:"none", color:"#fff"}}>
                <Li>
                  <Log src={user1} /> Profile
                </Li>
                </Link>
                <Link to="/History"  style={{textDecoration:"none", color:"#fff"}}>
                <Li>
                  <Log src={History} /> Order History
                </Li>
                </Link>
                <Li>
                  <Log src={logout} /> Log out
                </Li>
              </Ul>
            </Postion>
          </HoverItem>
        </Felx>
      </Wrapper>
    </Container>
  );
};

export default Profile;
