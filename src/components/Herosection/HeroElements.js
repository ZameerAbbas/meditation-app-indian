import styled from "styled-components";


export const HeroContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  height: 800px;
  padding: 30% 10%;
  position: relative;
  // z-index: 1;

  :before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2),
        0%,
        rgba(0, 0, 0, 0.6) 100%
      )
      linear-gradient(180deg, rgba(0, 0, 0, 0.2), 0%, transparent 100%);
    z-index: 2;
  }
  @media screen and (max-width:660px) {
  felex-direction:column;
  }

`;
/* Add:before style*/

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 89%;
  overflow: hidden;

`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-bject-fit: cover;
  object-fit: cover;
  filter: blur(1px);
`;

export const HeroContent = styled.div`
  z-index: 3;
  width:53%;
  // max-width: 2700px;
  position: absolute;
  padding: 45px  75px;
  border-radius:25px;
  text-align:left;
  backdrop-filter: blur(12px);
  background:rgba(20,20,20,0.2);
  top:41%;
  left:7%;
  @media screen and (max-width: 1373px) {
    padding: 35px  35px;
      width:50%;
    }

    @media screen and (max-width: 1208px) {
      padding: 35px  35px;
      }
 

`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 80px;
  text-align: left;
  padding:0px 0px;
  font-weight:900;
  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #25fcf4;
  font-size: 60px;
  text-align: left;
  font-weight:100;
   @media screen and (max-width:1537px) {
    font-size: 55px;
  }
 @media screen and (max-width:1366px) {
    font-size: 50px;
  }

  @media screen and (max-width:1285px) {
    font-size: 45px;
  }

  @media screen and (max-width:1195px) {
    font-size: 42px;
  }
  @media screen and (max-width:1012px) {
    font-size: 35px;
  }
 

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`

  text-align: left;
  padding:15px 0px;
`;

export const Button = styled.button`
  font-size: 19px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.969625350140056) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236,231,231,0.6);
  outline: none;
  margin-top: 15px;
  margin-left:20px;
  outline: none;
  border: none;
  padding: 10px 24px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 50px 50px 0 50px;
  color: #fff; 
  letter-spacing: 1.5px;
`;

export const FiveDot = styled.div`
display:flex;
position: absolute;
right:50px;
bottom:210px;


`
export const Dots = styled.span`
  width:30px;
  height:10px;
  background-color:#25fcf4;
  margin:5px;
   @media screen and(max-width: 1460px) {
  
  }
`