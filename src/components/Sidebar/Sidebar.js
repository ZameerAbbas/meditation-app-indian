import React from "react";
import Profile from "./Profile/Profile";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
 SidebarWrapper,
  SidebarMenu,
  SidebarLink,

} from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {

  
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle}/>
      </Icon>
      <SidebarWrapper>
        <Profile/>
        <SidebarMenu>
          <SidebarLink to="./"  onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="/About"  onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/Videos"  onClick={toggle}>Videos</SidebarLink>
          <SidebarLink to="/Shop"  onClick={toggle}>Shop</SidebarLink>
          <SidebarLink to="/Blog"  onClick={toggle}>Blog</SidebarLink>
          <SidebarLink to="/Events"  onClick={toggle}>Events</SidebarLink>
          <SidebarLink to="/Donation"  onClick={toggle}>Donation</SidebarLink>
          <SidebarLink to="/Contact"  onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
