import styled from "styled-components";
import background from "../../images/page-background.jpg";

import { Link } from "react-router-dom";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  
  &::after {
    background-color: rgba(20, 20, 20, 0.3);
  }
`;
export const WelComeContainer = styled.div`
  padding: 80px 50px;
`;

export const LoginWrapper = styled.div`
  background: rgba(20, 20, 20, 0.3);
  padding: 70px 50px;
  margin: 150px 450px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  backdrop-filter: blur(8px);
  @media (max-width: 1280px) {
    margin: 150px 350px;
  }
  @media (max-width: 1080px) {
    margin: 150px 250px;
  }
  @media (max-width: 992px) {
    width: 100%;
    margin: 150px 00px;
  }
`;
export const CloseWrapper = styled(Link)`
position:absolute;
top:25px;
right:30px;
cursor:pointer;
`
export const Heading = styled.h1`
color: #25fcf4;
font-weight:100;
margin-top:15px;

`
export const SubHeading = styled.h3`
color:#fff;
font-weight:100;
margin-top:15px;

`
export const  NameConatiner = styled.div`
width: 80%;
display:flex;
justify-content:space-between;
@media (max-width: 772px) {
  flex-direction:column;

}
`
export const Input1= styled.input`
background: #60669e;
opacity: 0.9;
border-radius: 50px;
outline: none;
border: none;
padding: 20px;
width: 48%;
margin-top:25px;
color: #dae6eb;

::placeholder {
  color: white;
  opacity: 1;
  font-size: 20px;
}
@media (max-width: 772px) {
    width: 100%;
 
  }
  @media (max-width: 512px) {
    width: 120%;
 
  }
`
export const Input = styled.input`
background: #60669e;
opacity: 0.9;
border-radius: 50px;
outline: none;
border: none;
padding: 20px;
width: 80%;
margin-top:25px;
color: #dae6eb;

::placeholder {
  color: white;
  opacity: 1;
  font-size: 20px;
}
@media (max-width: 512px) {
    width: 100%;
 
  }
`
export const Para = styled.p`
margin-top:15px;
color:#fff;


`

export const Button = styled.button`
  font-size: 16px;
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
  padding: 10px 15px;   
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px 50px 0 50px;
  color: #fff;
`;
