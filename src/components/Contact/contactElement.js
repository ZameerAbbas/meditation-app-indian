import styled from "styled-components";

import { Link } from 'react-router-dom';




export const Container = styled.div`
background-color:rgba(20,20,20,0.5);
color:#fff;
padding : 45px 0;


`
export const ContactWrapper = styled.div`
display:flex;
justify-content:space-around;
@media (max-width: 600px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }


`
export const FlexCard = styled.div`


`
export const Heading = styled.h2`
color: #25fcf4;
padding: 16px 0px;
`
export const Ul = styled.ul`
list-style:none;


`
export const Li = styled.li`
line-height:1.5rem;
color:#a0a7be;
a{
    font-size:19px    
}
&:hover{
    transition:all 0.2s ease-in-out;
    cursor:pointer;
    color:#010606;

}
`
export const Para = styled.div`

line-height:2.5rem;`
export const Text = styled.p`
line-height:1.5rem;
color:#a0a7be;
font-size:19px
`
export const Icon= styled.span`
color:#a0a7be;
font-size:18px;
dispaly:flex;
align-items:center;

`
export const SocialIcons = styled.div`
display:flex;
justify-content:space-around;
padding:10px 0;

`
export const IconList = styled.div`
color:#a0a7be;`
export const Sicon = styled.img`
&:hover{
    transition:all 0.2s ease-in-out;
    cursor:pointer;
    color:#010606;

}
`
export const Copyright= styled.div`
display:flex;
justify-content:center;
align-items:center;
padding: 15px 0;
color:#a0a7be;
border-top: 2px solid #666aa3;
font-size:20px;

`


export const NavLinks = styled(Link)`
color:#a0a7be;
font-size:16px; 
 display:flex;
 align-items:center;
 text-decoration:none;
 cursor:pointer;
 text-transform:uppercase;
font-size:19px;    

&:hover{
    transition:all 0.2s ease-in-out;
    cursor:pointer;
    color:#010606;

}
      
`