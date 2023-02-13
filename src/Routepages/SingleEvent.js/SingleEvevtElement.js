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
  @media(max-width:1080px){
    flex-direction:column;
  }
`;
export const FlexCard = styled.div`
  width: 80%;
  padding-left: 100px;
  @media(max-width:772px){
    padding-left: 30px;
    width: 100%;
  }
  @media(max-width:772px){
    padding-left: 30px;
    width: 100%;
  }
  @media(max-width:512px){
    padding-left: 20px;
    width: 100%;
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
`;
export const Subheading = styled.h1`
  color: #25fcf4;
  font-weight: 100;
  font-size: 55px;
  @media(max-width:772px){
    font-size: 40px;
  }
  @media(max-width:512px){
    font-size: 30px;
  }
`;
export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 2.3rem;
  border-radius: 15px;
  padding: 20px 0px;
  color: #afe1e1;
  font-weight: 200;
`;

export const TicketWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;
`;
export const TicketFlexWrapper = styled.div`
  display: flex;
  background: rgba(20, 20, 20, 0.3);
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  justify-content: space-between;

  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;
export const TicketFleCard = styled.div`
  padding: 50px 30px;
`;

export const Ul = styled.ul`
  list-style-type: none;
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`;
export const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-end
  align-items: center;
  margin-top:15px;
  @media(max-width:512px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

`;
export const Counter = styled.div`
  display: flex;

  border-bottom: 1px solid #fff;
  justify-content: center;
  align-items: center;
`;
export const CounterHeading = styled.h2`
  color: #fff;
  font-weight: 100;
`;
export const CounetBtn = styled.button`
  padding: 0 35px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 30px;
`;

export const TicketFleCard2 = styled.div`
  padding: 30px 30px;
  background: rgba(70, 118, 157, 77);

  border-radius: 15px;
  color: #fff;
`;
export const TickHeading = styled.h1`
  font-weight: 100;
  font-size: 26px;
`;
export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid #fff;
  align-items: center;
  @media(max-width:512px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;
export const Input = styled.input`
  border-radius: 50px;
  padding: 10px;

  outline: none;
  ::placeholder {
    padding: 10px;
  }
`;

export const TeckSubH3 = styled.h3``;
export const TeckSubH2 = styled.h2``;

export const Button = styled.button`
  font-size: 20px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.9640231092436975) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);
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
  margin-left: 50px;
`;


export const SilderContainer =styled.div`


`
export const SliderWrapper =styled.div`
 width: 80%;
 text-align:center;
 margin-left:190px;
 margin-top: 150px;
 margin-bottom: 150px;
 border-radius:15px;
 padding: 15px;
 @media(max-width:772px){
  margin-left:190px;
  width: 90%;
  padding: 15px;
}

@media(max-width:1560px){
  margin-left:180px;
}
@media(max-width:1380px){
  margin-left:150px;
}
@media(max-width:1280px){
  margin-left:100px;
}

@media(max-width:772px){
  margin-left:30px;
}

@media(max-width:512px){
  margin-left:10px;
}
@media(max-width:480px){
  margin-left:10px;
}

`