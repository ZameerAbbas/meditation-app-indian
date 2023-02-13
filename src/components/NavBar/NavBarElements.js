import styled from 'styled-components';
import { Link } from 'react-router-dom';

 
export const Nav = styled.nav`
font-Family:adobe-clean, sans-serif;
font-style:normal;
font-weight:500;
/* height:80px;  */
padding:0px 12px;
font-size:14px;
position :absolute;

//-----use  for scrolling the navbar
// position :sticky;
top:20px;
z-index:10;
width : 100%;


@media screen and (max-width:1248px){

   
}
@media(max-width:1080px){

    position :relative;
}
@media(max-width:772px){

    position :relative;
}
`
export const NavBarContainer =styled.div`
display:flex;
justify-content :space-between;
height:6vh;
z-index:1;
width:100%;
@media screen and (max-width:1248px){
 
    // align-items:center;
    // flex-direction:column;
   
}


` ;
export const NavLogo = styled(Link)`

justify-self :flex-start;
cursor:pointer;
display:flex;
align-items:center;
text-decoration:none;
@media screen and (max-width:1280px){
    justify-content: flex-start;
  
    
     }
@media screen and (max-width:768px){
justify-content: flex-start;
padding: -30px 0;

  
 }


`
export const LogoImg = styled.img`
width:350px;
margin-top:25px;
@media screen and (max-width:1248px){
    margin-top:70px;
   
}
@media screen and (max-width:768px){
    width:200px;
    margin-top:30px;
     }
`

export const MoblieIcon = styled.div`
display:none;
 

@media screen and (max-width:1024px){
    display : block;
    position:absolute;
    top:0;
    right:28px;
    transform: translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;

}
`

 export const NavMenu = styled.ul`
 display:flex;
 background-color: rgba(20, 20, 20, 0.3);
 align-items:center; 
 list-style:none;
 text-align:center; 
 border-radius:7px;

 @media screen and (max-width:1394px){
 
   
    }
 @media screen and (max-width:1280px){
 
  
    
     }

 @media screen and (max-width:1024px){
     display : none
 }
 
 `

 export const NavItem = styled.li`
    // height:80px;


 
  `

  export const NavLinks = styled(Link)`
  color:#fff;
   display:flex;
   align-items:center;
   text-decoration:none;
   padding : 0 2rem;
   height:100%;
   cursor:pointer;
   text-transform:uppercase;
   &.active{
    color: #25fcf4;
    background-color: #469d9a;
    height:6vh;
    border-radius:15px;
}
    &:focus{
        background-color: #469d9a;
        height:6vh;
        border-radius:15px;
    }
    
    @media screen and (max-width:1438px){
        padding : 0 1.8rem;
      
   }
    @media screen and (max-width:1366px){
        padding : 0 1.4rem;
      
   }
   @media screen and (max-width:1280px){

    padding : 0 1rem;
   
    }
   
    @media screen and (max-width: 1156px){

        padding : 0 1rem;
       
        }
        
  `
  export const NavBtn = styled.nav`
  
  display:flex;
  align-items:center;



  @media screen and (max-width: 768px){
      display:none;
  }
  `
 