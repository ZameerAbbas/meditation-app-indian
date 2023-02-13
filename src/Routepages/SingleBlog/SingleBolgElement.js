import styled from "styled-components";

export const ContainerWrapper = styled.div`
  padding-top: 15%;
  display: flex;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;
export const Flxleft = styled.div`
  padding: 0 50px;
`;
export const Flxright = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Heading = styled.p`
  font-size: 26px;
  color: #e4f4f3;
  text-transform: captilize;
`;
export const Subheading = styled.h1`
  color: #25fcf4;
  font-weight: 100;
  font-size: 55px;
`;
export const Paragraph = styled.p`
  font-size: 20px;

  line-height: 2.6rem;
  border-radius: 15px;
  padding: 20px 0px;
  color: #afe1e1;
  font-weight: 200;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  width: 50%;
  @media (max-width: 772px) {
    width: 100%;
  }
  @media (max-width: 512px) {
  }
`;
export const IconList = styled.div`
  color: #a0a7be;
`;
export const Sicon = styled.img`
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #010606;
  }
`;

export const Img = styled.img`
  width: 50%;
  border-radius: 50px 50px 0 50px;
  border: 6px solid #afe1e1;
  margin-top: 15px;
  @media (max-width: 772px) {
    width: 70%;
  }
`;

export const Column2 = styled.div`
  // width: 40%;
  padding: 15px;
  @media (max-width: 1328px) {
    padding: 5px;
  }
  @media (max-width: 1028px) {
    width: 90%;
  }
`;

export const Heading2 = styled.h1`
  margin-bottom: 24px;
  margin-left: 15px;
  font-size: 38px;
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

export const Event = styled.div`
display:flex;
align-items:center
flex-direction:row;
border-bottom:2px solid #205665;
padding:10px;



`;
export const Edate = styled.div`
  font-size: 40px;
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
export const Eheading = styled.p`
  color: #25fcf4;
  font-weight: 100;
  max-width: 250px;
  font-size: 24px;

  @media screen and(max-width: 1111px) {
    font-size: 12px;
  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 5%;
`;

export const TopFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  @media (max-width: 890px) {
    flex-direction: column;
  }
`;
export const Heading1 = styled.h1`
  color: #25fcf4;
  font-weight: 100;
`;
export const Heading3 = styled.h1`
  color: #25fcf4;
  font-size: 26px;
  font-weight: 100;
  margin-top: 25px;
`;
export const Input = styled.input`
  background: #60669e;
  opacity: 0.7;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 15px;
  margin-top: 20px;
  color: #fff;
  ::placeholder {
    color: #fff;
    opacity: 1;
    font-size: 20px;
  }
`;
export const CardLeft = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 15px;
  width: 48%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 890px) {
    width: 100%;
  }
`;
export const CardRight = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 15px;
  width: 48%;
  padding: 30px;
  @media (max-width: 890px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const BottomFlex = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 15px;
  margin: 15px;
  text-align: center;
  padding: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 772px) {
    text-align: left;
    padding: 70px;
  }
  @media (max-width: 512px) {
    padding: 70px;
    margin: 5px;
  }
  & button {
  }
  & input {
    border-radius: 50px 0px 0px 50px;
    padding: 15px;
    z-index: 1;
    @media (max-width: 772px) {
      border-radius: 50px;
    }
    @media (max-width: 512px) {
      border-radius: 50px;
      width: 100%;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: center;
  justify-content: center;
  margin-left: 150px;
  @media (max-width: 1080px) {
    margin-left: 100px;
  }
  @media (max-width: 772px) {
    margin-left: 20px;
    text-align: left;
    width: 100%;
  }
  @media (max-width: 512px) {
    margin-left: 5px;
  }
`;
export const Headingbotm = styled.h1`
  color: #25fcf4;
  font-weight: 100;
  &:after {
    content: "";
    // position: absolute;
    bottom: 0;
    left: 750px;
    right: 0;
    top: 0;
    height: 0.2em;
    border-top: 6px solid #25fcf4;
    width: 120px;
    background: #25fcf4;
    border-radius: 100px;
  }
`;

export const Input1 = styled.input`
  background: #60669e;
  opacity: 0.7;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 15px;
  margin-top: 15px;
  color: #fff;
  width: 100%;
  font-size: 20px;
  ::placeholder {
    color: #fff;
    opacity: 1;
    font-size: 20px;
  }
  @media (max-width: 1366px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.9640231092436975) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);
  width: 200px;
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
  z-index: 9;
`;
export const Button1 = styled.button`
  font-size: 20px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.9640231092436975) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);
  outline: none;
  border: none;
  border-radius: 50px;
  color: #fff;
  z-index: 99;
  position: absolute;
  width: 20%;
  margin-left: -250px;
  padding: 15px;
  margin-top: 15px;
  @media (max-width: 1166px) {
    margin-left: -200px;
  }
  @media (max-width: 1366px) {
    margin-left: -170px;
  }
  @media (max-width: 953px) {
    margin-left: -150px;
  }
  @media (max-width: 847px) {
    margin-left: -120px;
  }
  @media (max-width: 772px) {
    margin-top: 80px;
    margin-left: -190px;
  }
  @media (max-width: 512px) {
    width: 30%;
  }
`;
