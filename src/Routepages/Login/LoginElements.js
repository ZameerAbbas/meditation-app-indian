import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../images/page-background.jpg";

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


