import { Link } from "react-router-dom";
import styled from "styled-components";
export const MoreDonationContianer = styled.div`
  background: rgba(20, 20, 20, 0.3);
  padding: 80px 50px;
  margin: 50px 100px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  @media (max-width: 792px) {
    padding: 50px 25px;
    margin: 25px 50px;
  }
`;

export const DonationCardFelx = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 3px;
    grid-row-gap: 3px;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`;
export const Headline = styled.h1`
  color: #2ad9f6;
  font-size: 36px;
`;
export const DonationCard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  padding: 25px 50px;
  @media (max-width: 1028px) {
    width: 80%;
    padding: 25px 10px;
  }
  @media (max-width: 792px) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;
export const DonationIcon = styled.img`
  width: 80%;
  height: 100%;
  border: 5px solid #2ad9f6;
  border-radius: 25px 25px 0 25px;
  margin: 5px;
`;

export const DonationH2 = styled.h2`
  margin: 5px;
  font-weight: 200;
  color: #25fcf4;
  padding: 5px 0;
`;

export const DonationP = styled.p`
  text-align: left;
  font-size: 20px;
  color: #a0a7be;
  line-height: 1.9rem;
`;

export const Span = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
export const Left = styled.div`
  color: #accef7;
`;
export const Right = styled.div`
  width: 70px;
  height: 70px;
`;
