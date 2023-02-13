import styled from "styled-components";
export const Shado = styled.div`
  box-shadow: -2px -200px 89px 125px rgba(28, 42, 70, 0.84);
  -webkit-box-shadow: -2px -200px 89px 125px rgba(28, 42, 70, 0.84);
  -moz-box-shadow: -2px -200px 89px 125px rgba(28, 42, 70, 0.84);

  position: absolute;
  // z-index: 99;
  width: 99%;
  bottom: -370px;
  overflow: hidden;
  @media screen and (max-width: 512px) {
    box-shadow: none;
  }
`;

export const InfoContainer = styled.div`
  color: #fff;
  padding: 70px 0px;
  border-radius: 0px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div``;

export const InfoRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1028px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  background-color: rgba(20, 20, 20, 0.3);
  border-radius: 15px;
  width: 60%;
  padding: 0px 25px;
  margin: 0 25px;
  @media (max-width: 1028px) {
    width: 90%;
  }
`;
export const Column2 = styled.div`
  width: 40%;
  padding: 15px;
  @media (max-width: 1328px) {
    padding: 5px;
  }
  @media (max-width: 1028px) {
    width: 90%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 740px;
  padding: 36px 20px;

`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 33px;
  line-height: 1.1;
  font-weight: 100;
  color: #25fcf4;
  @media (max-width: 1328px) {
  }

  @media screen and(max-width: 480px) {
    font-size: 32px;
  }
`;
export const Heading2 = styled.h1`
  margin-bottom: 24px;
  margin-left: 15px;
  font-size: 33px;
  line-height: 1.1;
  font-weight: 100;
  color: #25fcf4;
  @media (max-width: 1328px) {
    margin-bottom: 20px;
  }

  @media screen and(max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  // border: 1px solid red;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 36px;
  color: #8fc1c7;
  text-transform: captlize;

  @media screen and(max-width: 1486px) {
    margin-bottom: 25px;
  }

  @media screen and(max-width: 1311px) {
    margin-bottom: 2px;
  }

  @media screen and(max-width: 920px) {
    margin-bottom: 35px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.969625350140056) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);

  outline: none;
  margin-top: 10px;
  outline: none;
  border: none;
  padding: 10px 24px;
  margin-left: 15px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  border-radius: 50px 50px 0 50px;
  color: #fff;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* background:blue; */
`;

export const Event = styled.div`
display:flex;
align-items:center
flex-direction:row;
border-bottom:2px solid #205665;
padding:10px;
width:90%;


`;
export const Edate = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #beefed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  @media screen and(max-width: 1311px) {
    font-size: 23px;
  }
`;
export const EMoth = styled.div`
  font-size: 18px;
  font-weight: 100;
  margin: 5px;
`;
export const EImg = styled.img`
  width: 80px;
  border-radius: 15px;
  margin: 5px;
`;
export const Edetail = styled.div`
  margin-left: 9px;
`;
export const Eheading = styled.h3`
  color: #25fcf4;
  margin: 3px;

  @media screen and(max-width: 1111px) {
    font-size: 12px;
  }
`;
export const Etime = styled.div`
  padding: 2px;
`;
export const ELocation = styled.div`
  padding: 2px;
`;
