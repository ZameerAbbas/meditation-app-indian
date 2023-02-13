import { Link } from "react-router-dom";
import styled from "styled-components";

export const MoreEventContianer = styled.div`
  background: rgba(20, 20, 20, 0.3);
  padding: 80px 50px;
  margin: 50px 100px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  @media (max-width: 772px) {
    padding: 80px 30px;
    margin: 50px 70px;
  }
  @media (max-width: 512px) {
    padding: 40px 10px;
    margin: 25px 30px;
  }
`;

export const EventCardFelx = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media(max-width:1180px){
    grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  }
  @media(max-width:700px){
    grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  
  }
  @media (max-width: 512px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;
export const EventCard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
  @media (max-width: 1480px) {
    padding: 25px 30px;
  }
  @media (max-width: 1028px) {
    max-width: 80%;
  }
  @media (max-width: 792px) {
    text-align: center;
    align-items: center;
  }
  @media (max-width: 512px) {
    text-align: center;
    align-items: center;
    padding: 2px 0px;
  }
`;
export const EventIcon = styled.img`
  width: 80%;
  height: 100%;
  border: 5px solid #2ad9f6;
  border-radius: 25px 25px 0 25px;
  margin: 5px;
  @media (max-width: 772px) {
    width: 80%;
    border: 2px solid #2ad9f6;
    border-radius: 15px 15px 0 15px;
  }
`;

export const EventH2 = styled.h2`
  margin: 5px;
  font-weight: 200;
  color: #25fcf4;
  padding: 5px 0;
`;
export const Icons = styled.span`
  color: #25fcf4;
  margin: 5px;
`;
export const EventP = styled.p`
  text-align: left;
  font-size: 20px;
  color: #a0a7be;
  line-height: 1.9rem;
`;

export const Button = styled.button`
  font-size: 16px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.9640231092436975) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);
  width: 150px;
  margin-top: 25px;
  outline: none;
  border: none;
  padding: 10px 24px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px 50px 0 50px;
  color: #fff;
`;
export const Button1 = styled.button`
  font-size: 20px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.9640231092436975) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);

  margin-top: 75px;
  outline: none;
  border: none;
  padding: 15px 24px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px 50px 0 50px;
  color: #fff;
`;
