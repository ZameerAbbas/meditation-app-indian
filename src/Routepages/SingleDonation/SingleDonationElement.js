import styled from "styled-components";
import background from "../../images/page-background.jpg";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const ContainerWrapper = styled.div`
  padding-top: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(max-width:1180px){
    flex-direction:column;
  }
`;
export const FlexCard = styled.div`
  width: 80%;
  padding-left: 100px;
  @media(max-width:772px){
    padding-left: 50px;
  }
`;
export const Img = styled.img`
  width: 80%;
  border-radius: 50px 50px 0 50px;
  border: 6px solid #25fcf4;
`;
export const Heading = styled.p`
  font-size: 26px;
  color: #e4f4f3;
  text-transform: captilize;
  @media (max-width: 512px) {
    max-width: 100%;
    font-size: 20px;
  }
`;
export const Subheading = styled.h1`
  color: #25fcf4;
  font-weight: 100;
  font-size: 55px;
  @media (max-width: 992px) {
    max-width: 100%;
    font-size: 45px;
  }
  @media (max-width: 772px) {
    max-width: 100%;
    font-size: 40px;
  }
  @media (max-width: 512px) {
    max-width: 100%;
    font-size: 30px;
  }
`;
export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 2.6rem;
  border-radius: 15px;
  padding: 20px 0px;
  color: #afe1e1;
  font-weight: 200;
  @media (max-width: 992px) {
    max-width: 80%;
    line-height: 2.4rem;
  }
  @media (max-width: 772px) {
    max-width: 100%;
    line-height: 2rem;
  }
`;

export const RatingConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
`;
export const FlexWrapper = styled.div`
  background: rgba(20, 20, 20, 0.3);
  width: 80%;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  @media(max-width:1080px){
    flex-direction:column;
  }
`;
export const RatingFlexCard = styled.div`
  padding: 20px 100px;
  width: 100%;
  @media(max-width:1080px){
    padding: 20px 70px;
  }
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  color: #ffff;
  justify-content: space-betwwen;
 @media(max-width:550px){
  justify-content: center;
 }

`;
export const FelxHeading = styled.h1`
  color: #25fcf4;
  font-size: 3rem;
`;
export const ProgressContainer = styled.div`
  background: gray;
  height: 5vh;
  margin: 15px 0;
  border-radius: 100px;
  width: 100%;
  padding:4px;
`;
export const Progress = styled.div`
  border-radius: 100px;
  background: #25fcf4;
  width: 25%;
  height: 4vh;
 
`;

export const Para = styled.p``;

export const ButtonTop = styled.button`
  padding: 10px;
  font-size: 20px;
  border-radius: 100px;
  margin: 15px 0;
  border: none;
  color: blue;
`;

export const Button2 = styled.button`
  padding: 10px;
  font-size: 20px;
  border-radius: 100px;
  margin: 15px 0;
  border: none;
  margin-right: 10px;
  background: linear-gradient(
    90deg,
    rgba(4, 154, 159, 1) 0%,
    rgba(93, 91, 215, 1) 100%
  );
`;

export const Butns = styled.div`
  padding: 10px;
  font-size: 20px;
  border-radius: 100px;
  margin: 15px 0;
  border: none;
  margin-right: 10px;
  background: #073140;
`;

export const FelxHeading1 = styled.h2`
  color: #25fcf4;
  font-size: 2.5rem;
  font-weight: 100;
`;

export const SliderConatiner = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0px;
`;

export const ContactFromContainer = styled.div`
  margin: 25px auto;
  display: flex;
  grid-gap: 26px;
  flex-direction: column;
  border-radius: 15px;
`;
export const FormWrapper = styled.form`
  display: flex;
  color: #dae6eb;
  font-size: 20px;
  flex-direction: column;
  width:100%;
  & label {
    font-size: 20px;
  }
`;
export const UserDetails = styled.span`
  margin-top: 15px;
  display:flex;
  width:100%;
  justify-content:space-between;
  @media(max-width:1280px){
    flex-direction: column;
    margin-top:5px;
  }
`;
export const Input = styled.input`
  background: #60669e;
  opacity: 0.7;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 15px;
  width: 100%;

  color: #dae6eb;
  ::placeholder {
    color: #dae6eb;
    opacity: 1;
    font-size: 20px;
  }
  @media(max-width:1280px){
  
    margin-top:15px;
  }
`;
export const Input1 = styled.input`
  background: #60669e;
  opacity: 0.7;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 15px;
  width: 100%;
  margin-right: 3%;
  color: #dae6eb;
  ::placeholder {
    color: #dae6eb;
    opacity: 1;
    font-size: 20px;
  }
`;
export const Textarea = styled.input`
  background: #60669e;
  opacity: 0.7;
  width: 100%;
  border-radius: 100px;
  outline: none;
  border: none;
  padding: 15px;
  margin: 15px 0;
  color: #dae6eb;
  ::placeholder {
    color: #dae6eb;
    opacity: 1;
    font-size: 20px;
  }
`;

export const Check = styled.input`
  border: 1px solid red;
  padding: 15px;
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
