import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  padding : 8%  5%;

  border-radius: 0px;
  @media screen and (max-width: 520px) {
    padding : 8%  10%;
  }
`;

export const Boxone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;
export const SceTitle = styled.h1`
color: #25fcf4;
font-weight:100;
`;
export const Parag = styled.p`
color: #8fc1c7;
font-size: 20px;
line-height:2rem;
`
export const Item = styled.div``;
export const Link = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
export const Button = styled.button`
  font-size: 16px;
  background: linear-gradient(82deg, rgba(34,193,195,0.9640231092436975) 0%, rgba(40,99,200,0.9836309523809523) 100%);
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

