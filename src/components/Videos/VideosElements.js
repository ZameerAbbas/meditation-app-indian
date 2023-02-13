import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";



export const Boxone = styled.div`
  display: flex;
  padding: 3% 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
color:#fff;
padding: 0% 0%;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const SceTitle = styled.h1`
  color: #25fcf4;
  font-weight:100; 
  `;
export const Parag = styled.p`
color: #8fc1c7;
font-size:20px;
line-height:2rem;`;
export const Item = styled.div``;
export const Link = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  background: #0a436a;
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

export const VideosContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1028px) {
    flex-direction: column;
    margin-left:00px;
    justify-content: center;
    align-items: center;
  } 
 
`;
export const MainVideo = styled.div`
//  display:inline-block;

// @media (max-width: 1028px) {
//   padding-left: 160px;
//   margin:5px;
// } 
// @media (max-width: 772px) {
//   padding-left: 150px;
//   margin:5px;
// };
// @media (max-width: 672px) {
//   padding-left: 100px;
//   margin:5px;
// } 

`;

export const MainIMG = styled.img`
  width: 100%;
  height: 60vh;
  border-radius: 25px;
  @media (max-width: 1028px) {
    width: 74%;
    height: 50vh;
    // padding-left: 160px;
  } 
`;
export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  @media (max-width: 468px) {
    grid-gap: 5px;
     } 

`;
export const GirdItem = styled.div`
  width: 100%;
`;
export const ImgItems = styled.img`
  border-radius: 25px;
  height: 30vh; 
  // width:110%;
  @media (max-width: 468px) {
    width:80%;
     } 
`;
