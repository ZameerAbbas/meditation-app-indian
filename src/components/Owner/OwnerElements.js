import styled from "styled-components";

export const ServicesCard = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;

  padding: 80px;
`;

export const ServicesIcon = styled.img`
  height: 340px;
  width: 340px;
`;

export const ServicesH2 = styled.h2`
  font-size: 30px;
  line-height: 4rem;
  font-weight: 200;
  color: #25fcf4;
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