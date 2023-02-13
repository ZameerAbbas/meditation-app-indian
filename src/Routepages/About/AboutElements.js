import styled from "styled-components";
import background from "../../images/page-background.jpg"

export const Container = styled.div`
background-image:url(${background});
background-size: cover;
background-repeat: no-repeat;



`
export const Topwrapper = styled.div`
padding-top:15%;
padding-left: 6%;
padding-right: 2%;
@media (max-width:1080px){
  padding-left: 3%;
}


`
export const Heading = styled.p`
font-size:26px;
color:#e4f4f3;
text-transform:captilize;
@media(max-width:5122px){
  max-width:100%;
  font-size:20px;
}
`
export const Subheading =styled.h1`
color:#25fcf4;
font-weight:100;
font-size:60px;
@media(max-width:772px){
  max-width:100%;
  font-size:40px;
}
@media(max-width:5122px){
  max-width:100%;
  font-size:30px;
}
`
export const Paragraph = styled.p`
background:rgba(20,20,20,0.3);
font-size:20px;
line-height:2.6rem;
border-radius:15px;
padding:35px 30px;
color:#afe1e1;
font-weight:200;
@media(max-width:772px){
  max-width:100%;
}
`

// /========owner====///
export const OwnerWrapper = styled.div`
padding-left: 6%;
padding-top:5%;
 display:flex;
 @media (max-width:998px){
  padding-left: 3%;
  flex-direction:column-reverse;
  align-items:center;
}
`
export const BioContainer = styled.div`
color:#afe1e1;
`
export const Para = styled.p`

font-size:20px;
line-height:2.6rem;
border-radius:15px;
padding:35px 30px;
color:#afe1e1;
`
export const PhotoView = styled.div``
export const Img = styled.img`
@media (max-width:1080px){
   width:80%;
}

`



// ======flexboxes ======'///
export const FlexContainer =styled.div`
width:90%;
display:flex;
align-items:center;
justify-content:center;
color:#beefed;
padding:170px 0;
@media (max-width:1280px){
  width:100%;

 
}

`
export const FelxWrapper =styled.div`
display: flex;
width:80%;
justify-content:space-between;
margin-left:10%;
@media (max-width:1280px){
  width:80%;
  margin-left:2%;
 
}
@media (max-width:1080px){
  flex-direction:column;
}

`

export const FelxCard =styled.div`
 background:rgba(20,20,20,0.3); 
 border-radius:10px;
 padding: 10px 40px;
 text-align:center;
 @media (max-width:1080px){
  padding: 50px 40px;
  margin:15px 0;
}

`
export const Icon =styled.img`
margin-top:-95px;
@media (max-width:1080px){
  margin-top:0;
}
`
export const FlexHeading =styled.h1`
font-size:90px;
font-weight:600;
`
export const FelxPara=styled.p`
font-size:24px;

`

// ======testimonails====///

export const TestiContainer = styled.div`

padding-top:5%;
padding-left: 6%;
padding-right: 2%; 

`

export const TextiFlexWrapper = styled.div`
display:flex;
text-align:center;
@media (max-width:680px){
  flex-direction:column;
}
`
export const TextiFlexWrapper2 = styled.div`
display:flex;
width:80%;
justify-content:center;
align-items:center;
text-align:center;

margin-left:10%;
@media (max-width:680px){
  flex-direction:column;
  margin-left:0%;
  width:100%;
}
`
export const TextiFlexCard = styled.div`
  margin:15px;
`
export const TestPara = styled.p`
color:#beefed;
background:rgba(20,20,20,0.3);
padding:45px 10px;
border-radius:10px;
font-size:20px;

&:after{
   content:""
    width: 200px;
    height:280px;
    background:rgba(20,20,20,9);
  
  
}

`

export const Quotes  = styled.img`
 float:left;
`
export const Quotes2  = styled.img`
 float:right;
`
export const Name = styled.h3`
font-size:26px;
font-weight:800;
color:#25fcf4;
padding:10px 

`