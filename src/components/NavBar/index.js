import React from "react";
import { FaBars } from "react-icons/fa";
import logo from '../../images/logo.svg'
import {
  Nav,
  NavBarContainer,
  NavLogo,
  LogoImg,
  MoblieIcon,
  NavMenu,
  NavItem,
  NavLinks,
  
} from "./NavBarElements";
import Profile from "./Profile/Profile";

const NavBar = ({toggle}) => {
  return (
    <>
        
      <Nav>
      <Profile />
        <NavBarContainer>
          <NavLogo to="./" smooth={300}>
            <LogoImg src={logo} />
          </NavLogo>
          <MoblieIcon onClick={toggle}>
            <FaBars />
          </MoblieIcon>
         
          <NavMenu>
          <NavItem>
              <NavLinks to="./" >Home </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/About" >About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Videos" >Videos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Shop" >Shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Blog" >Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Events" >Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Donation">Donation</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Contact" >Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
