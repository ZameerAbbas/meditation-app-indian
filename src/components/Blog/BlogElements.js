import styled from "styled-components";
export const BlogContainer = styled.div`

  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content: center;
  padding: 55px 0;
`;
export const BlogWrapper = styled.div`
  display:flex;
  background-color:rgba(20,20,20,0.3);
  width:90%;
  align-items:center;
  flex-direction:column;
  justify-content: center;
  border-radius: 50px;
  

 
`;
export const Heading = styled.h1`

font-weight: 400;
color: #25fcf4;
padding: 50px 0;

`;
export const BlogCardFelx = styled.div`
display:flex;
@media (max-width: 1028px) {
  flex-direction:column;
  justify-content:center;
  align-items:center
}

`
export const BlogCard = styled.div`

  display: flex;
  flex-direction: column;
  max-height: 740px;
  max-width: 40%;
  padding:25px 50px;
  @media (max-width: 1028px) {
    max-width: 80%;
  }
  @media (max-width: 792px) {
    text-align:center;
    align-items:center;
  }
`;
export const BlogIcon = styled.img`
  // height: 0px;
  width: 90%;
  border:5px solid #2ad9f6;
  border-radius: 50px 50px 0 50px;
  margin:10px;
`;

export const BlogH2 = styled.h2`
   maargin:5px;
  line-height:2rem;
  font-weight: 200;
  color: #25fcf4;
  margin:10px;
`;
export const BlogP = styled.p`
line-height:1.7rem;
  text-align: left;
  line-height: 2.3rem;
  font-size: 20px;
  line-height: 2rem;
  color:#a0a7be;
  margin:10px;
`;

export const Button = styled.button`
  font-size: 16px;
  background: linear-gradient(82deg, rgba(34,193,195,0.9640231092436975) 0%, rgba(40,99,200,0.9836309523809523) 100%);
  text-shadow: -2px -1px 5px rgba(236,231,231,0.6);
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
