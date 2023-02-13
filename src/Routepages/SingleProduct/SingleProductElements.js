import styled from "styled-components";
export const ProductFliud = styled.div`
padding-top:190px;
`
export const Heding = styled.h2`
color: #25fcf4;
font-weight:100;
text-align:center;



`
export const ProductConatiner = styled.div`
background:rgba(20,20,20,0.3);
padding: 80px 50px;
margin: 0px 100px;
border-radius: 25px;
display: flex;
margin-top:100px;
justify-content:space-around;

backdrop-filter: blur(8px);


@media (max-width: 1180px) {
    flex-direction:column;
    align-items:center;
  }

  @media(max-width:772px){
    
  padding: 50px 30px;
  margin: 0px 40px;

 }
 @media(max-width:512px){
    
  padding: 50px 10px;
  margin: 0px 10px;

 }
`
export const SliderWrapper = styled.div`
width: 20%;
@media (max-width:1560px){
     margin: 0 10px;
}
@media (max-width: 1180px) {
    display:none;
  }

`
export const ProductPic = styled.div`
@media (max-width:1560px){
    margin: 0 10px;
}
@media (max-width: 1180px) {
     margin: 15px;
  }

  @media(max-width:772px){
     margin: 5px;

  }
  
  img {
    @media(max-width:772px){
    width:300px;
    height:270px;
 
   }
   {
    @media(max-width:512px){
    width:200px;
    height:200px;
 
   }
   }

`
export const ProductDetails = styled.div`

width:30%;
@media (max-width:1560px){
    margin: 0 10px;
}
@media (max-width: 1180px) {
    width:100%;
    margin: 15px;
  }
`


export const DetailHeading = styled.h4`
color: #25fcf4;
font-size: 24px;
font-weight:100;

`
export const Span = styled.span`
color: #25fcf4;

`
export const Para  = styled.p`
color:#fff;
font-size:20px;
`
export const Span1 = styled.div`
display:flex;
justify-content: space-between;
padding-top: 15px;
`

// ====Productuy ====//
export const ProductBuy = styled.div`
`

export const CounterWrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
padding-top: 15px;


`
export const Counter = styled.div`
display:flex;
margin: 5px;
border-bottom: 1px solid #fff;
justify-content:center;
align-items:center;


`
export const CounterHeading = styled.h2`
color: #fff;
font-weight:100;
`
export const CounetBtn =styled.button`
padding: 15px;
background:transparent;
border: none;
color: #fff;
font-size:30px;

`

export const PricingWrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
`
export const CurrentPrice = styled.h2`
color: #25fcf4;
`
export const SubtitidedPrice = styled.del`
color:#fff;
font-size:18px;
`
export const SellPercent = styled.button`
font-size:16px;
`
export const CardBtn = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding-top: 15px;

`
export const AddtoFavirote = styled.div`
border:1px solid #25fcf4;
border-radius: 100px;
width: 50px;
height: 50px;

display: flex;
align-items: center;
justify-content: center;

`
export const Button = styled.button`
font-size: 16px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.9640231092436975) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);
  width: 150px;
  margin-top: 15px;
  outline: none;
  border: none;
  padding: 10px 24px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px 50px 0 50px;
  color: #fff;

`
export const MoreDetails= styled.div`
 border-top: 1px solid white;
 margin-top:15px;
 padding-top:10px;
 color: #fff;
 max-width:300px;


`
 
export const RelatedSlider =styled.div`
padding: 80px 40px;
margin: 150px 50px;
border-radius: 25px;
text-align:center;


& h1{
    color: #25fcf4;
    font-weight:100;
    font-size:40px;
}
@media(max-width:772px){
  padding: 40px 20px;
margin: 70px 25px;
}
`
