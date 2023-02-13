import styled from "styled-components";
export const ServicesContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and(max-width:1108px) {
    margin:0;
  }
  @media screen and (max-width: 768px) {
  }


  @media screen and (max-width: 480px) {
  }
`;
export const ServicesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  grid-gap: 16px;
  padding:90px 0px;

  @media (max-width: 1114px) {
    flex-direction: column;
  }  

  @media screen and(max-width:1108px) {
    margin: 0 0;
    grid-gap: 15px;
  }
`;

export const ServicesCard = styled.div`
  background-color: rgba(20, 20, 20, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
  border-radius: 10px;
  max-height: 740px;
  padding: 80px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  @media (max-width:1468px) {
    padding: 60px;
  } 
  @media (max-width:1381px) {
    padding: 50px;
  } 
  @media screen and(max-width:1108px) {
    padding: 0px;
  }
  @media screen and(max-width: 1038px) {
    padding: 55px;
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
 
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-top: -150px;
  @media (max-width: 1114px) {
    margin-top:0;
  }  
`;

export const ServicesH2 = styled.h2`
  font-size: 29px;;
  line-height: 4rem;
  font-weight: 200;
  color: #25fcf4;
  @media (max-width:1468px) {
    font-size: 26px;
    line-height: 2rem;
  } 
  @media (max-width:1381px) {
    font-size: 24px;
    line-height: 2rem;
  } 

  
 
`;
export const ServicesP = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 2rem;
  color:#8fc1c7;
`;

export const Button = styled.button`
  font-size: 16px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.969625350140056) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236,231,231,0.6);

  outline: none;
  margin-top: 15px;
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
`;
