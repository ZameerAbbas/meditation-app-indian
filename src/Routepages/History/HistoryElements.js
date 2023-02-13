import styled from "styled-components";

export const Heading = styled.h1`
  padding: 180px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  color:#25fcf4;
`;

export const ItemsContainer = styled.div`
  display: flex;
  padding-left: 6%;
  padding-right: 8%;
  justify-content: space-between;
  @media(max-width:1080px){
    flex-direction:column;
  }


`;

export const Carogry = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 10px;
  padding: 20px 55px;
  backdrop-filter: blur(5px);
  height: 70vh;
  margin-right: 15px;

  h1 {
    color: #e4f4f3;
    border-bottom: 1px solid #e4f4f3;
    padding: 5px;
    font-size: 26px;
    padding: 10px 55px;
  }
  ul {

    list-style: none;
    color: #e4f4f3;
    @media (max-width: 1080px) {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
    }
    @media (max-width: 772px) {
      flex-direction: column;
    
    }
    
  }
  li {
    font-size: 20px;
  }
  h3 {
    padding: 5px 0;
  }
  @media(max-width:1080px){
    flex-direction:column;
    height: auto;
    margin-bottom:25px;
  }
`;
export const ItemFlexWrapper = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 15px;
  padding: 12px 15px;
  backdrop-filter: blur(5px);
  width:100%;
`;
export const FelxCard = styled.div`
  display: flex;
  padding: 15px;
  justify-content:center;

`;

export const Button = styled.button`
  font-size: 24px;
  background: linear-gradient(82deg, rgba(34,193,195,0.9640231092436975) 0%, rgba(40,99,200,0.9836309523809523) 100%);
  text-shadow: -2px -1px 5px rgba(236,231,231,0.6);
  width: 250px;
  margin-top: 15px;
  outline: none;
  border: none;
  padding: 15px 24px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px 50px 0 50px;
  color: #fff;
`;
