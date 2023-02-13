import styled from "styled-components";


export const Heading = styled.h1`
  padding: 180px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  color:#25fcf4;
`;
export const DeliverItemContainer =styled.div`
display:flex;
justify-content:center;
color:#fff;

`
export const ItemWrapper = styled.div`
width:90%;
background: rgba(20,20,20,0.3);
border-radius: 15px;
padding: 30px;
margin-bottom:70px;

`
export const MainItem =styled.div`
 background:rgba(225,225,225,0.3);
 border-radius:15px;
 wisth:90%;
 padding:30px;
 @media (max-width:772px){
   
    padding:10px;
}

`
export const ItemDivTop =styled.div`
 width:100%;
display:flex;
justify-content:space-between;
@media (max-width:772px){
    flex-direction:column;
    justify-content:center;
    align-items:center;

}
`
export const Left =styled.div`
width:50%;
display:flex;
@media (max-width:772px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
}

`
export const Img = styled.img`
height:15vh;
border-radius:15px;


`
export const ImDetail =styled.div`
margin-left: 20px;

h1{
    margin-top:10px;
    font-weight:100;
}
p{
    margin-top:10px;
}
@media (max-width:772px){
   
    margin-left: 5px;
}
`
export const Right =styled.div`
p{
    margin-top:10px;
}
`
export const ItemDivBottom =styled.div`
display:flex;
margin-top:60px;
justify-content:space-between;
@media (max-width:1080px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`
export const BottomLeft =styled.div`
@media (max-width:772px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`
export const BottomCenter =styled.div`
width:60%;
@media (max-width:1080px){
    margin: 25px 0;
    width:100%;
}

`
export const BottomRight =styled.div`

h2{
    font-weight:100;
}

`
export const MoreItemsWrapper= styled.div`

background:rgba(225,225,225,0.3);
 border-radius:15px;
 wisth:90%;
 padding:30px;
 margin-top:30px;
 @media (max-width:772px){
   
    padding:10px;
}


`