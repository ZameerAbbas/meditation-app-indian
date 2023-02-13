import styled from "styled-components";
export const ContactWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  grid-gap: 16px;
  padding: 90px 0px;

  @media (max-width: 1114px) {
    flex-direction: column;
  }

  @media screen and(max-width:1108px) {
    margin: 0 0;
    grid-gap: 15px;
  }
`;

export const ContactCard = styled.div`
  background-color: rgba(20, 20, 20, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
  border-radius: 10px;
  max-height: 740px;
  width: 70%;
  padding: 80px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(6px);
  @media (max-width: 1468px) {
    padding: 60px;
  }
  @media (max-width: 1381px) {
    padding: 50px;
  }
  @media screen and(max-width:1108px) {
    padding: 0px;
  }
  @media screen and(max-width: 1038px) {
    padding: 55px;
  }
`;

export const ContactIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-top: -150px;
  @media (max-width: 1114px) {
    margin-top: 0;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 29px;
  line-height: 4rem;
  font-weight: 200;
  color: #25fcf4;
  @media (max-width: 1468px) {
    font-size: 26px;
    line-height: 2rem;
  }
  @media (max-width: 1381px) {
    font-size: 24px;
    line-height: 2rem;
  }
`;
export const ContactP = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 2rem;
  color: #8fc1c7;
`;

export const ContactFromContainer = styled.div`
  width: 80%;
  margin: 25px auto;
  display: flex;
  grid-gap: 26px;
  padding: 90px 0;
  padding-left: 100px;
  flex-direction: column;
  background: rgba(20, 20, 20, 0.3);
  border-radius: 15px;
  & h1 {
    color: #25fcf4;
  }
`;
export const FormWrapper = styled.form`
  display: flex;
  color: #dae6eb;
  font-size: 20px;
  flex-direction: column;
  width: 90%;
  & label{
    font-size:24px;
  }
`;
export const Input = styled.input`
  background: #60669e;
  opacity: 0.7;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 25px;
  width: 70%;
  font-size: 20px;
  
  color: #dae6eb;
  ::placeholder {
    color: #dae6eb;
    opacity: 1;
    font-size: 20px;
  }
  @media(max-width:700px){
    width: 100%;
    margin-top:15px;
  }
`;
export const Input1 = styled.input`
  background: #60669e;
  opacity: 0.7;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 25px;
  width: 70%;
  margin-right:5%;
  font-size: 20px;
 
  color: #dae6eb;
  ::placeholder {
    color: #dae6eb;
    opacity: 1;
    font-size: 20px;
  }
  @media(max-width:700px){
    width: 100%;
    margin-top:15px;
  }
`;
export const Textarea = styled.textarea`
  background: #60669e;
  opacity: 0.7;
  width: 100%;
  border-radius: 15px;
  height: 25vh;
  outline: none;
  border: none;
  padding: 25px;
  margin: 15px 0;
  color: #dae6eb;
  ::placeholder {
    color: #dae6eb;
    opacity: 1;
    font-size: 20px;
  }
`;
export const UserDetails = styled.div`
display:flex;
justify-content:space-between;
@media(max-width:700px){
  flex-direction:column;
}

`;

export const Check = styled.input`

  border: 1px solid red;
  padding: 15px;

`

export const Button = styled.button`
  font-size: 16px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.9640231092436975) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);
  width: 150px;
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
`;
