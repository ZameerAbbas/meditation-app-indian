import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;

`;
export const Heading = styled.h1`
  color: #25fcf4;
  padding: 15px;
  font-weight:100;  
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1028px) {
    flex-direction: column;
    justify-content:center;
    align-items:center;
  } 
`;

export const New = styled.img`
width:35%;
border: 5px solid #25fcf4;
border-radius: 50px 50px 0 50px;
@media (max-width: 1028px) {
  width: 80%;
}
`
export const ContentDiv = styled.div`
  max-width: 50%;
  line-height: 2.3rem;
  font-size: 20px;
  line-height: 2rem;
  color: #8fc1c7;
  @media (max-width: 1028px) {
    max-width: 80%;
  } 
  
`;
export const Para = styled.p`
  line-height: 3.6rem;
`;

export const Button = styled.button`
  font-size: 16px;
  background: linear-gradient(
    82deg,
    rgba(34, 193, 195, 0.969625350140056) 0%,
    rgba(40, 99, 200, 0.9836309523809523) 100%
  );
  text-shadow: -2px -1px 5px rgba(236, 231, 231, 0.6);

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
