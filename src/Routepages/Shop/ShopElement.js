import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  padding-left: 6%;
  padding-right: 8%;
  justify-content: space-between;
  margin-bottom: 70px;

  @media (max-width: 1410px) {
    padding-left: 4%;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    padding-left: 3%;
    padding-right: 6%;
  }
  @media (max-width: 812px) {
  }
  @media (max-width: 772px) {
    padding-left: 3%;
    padding-right: 6%;
  }
`;

export const Carogry = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 10px;
  padding: 12px 15px;
  backdrop-filter: blur(10px);
  height: 70vh;
  margin-right: 15px;

  h1 {
    color: #e4f4f3;
    border-bottom: 1px solid #e4f4f3;
    padding: 5px;
    font-size: 26px;
    @media (max-width: 1360px) {
      padding: 2px;
      font-size: 24px;
    }
  }
  ul {
    list-style: none;
    color: #e4f4f3;
    @media (max-width: 1080px) {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
    }
    @media (max-width: 512px) {
      flex-direction: column;
    }
  }
  li {
    font-size: 20px;
    @media (max-width: 1360px) {
      padding: 0px;
      font-size: 18px;
    }
    @media (max-width: 1080px) {
      margin: 10px 0;
    }
  }

  div {
  }
  @media (max-width: 1480px) {
    height: 100vh;
  }
  @media (max-width: 1410px) {
    padding: 12px 5px;
  }
  @media (max-width: 1360px) {
    padding: 20px 25px;
  }
  @media (max-width: 1080px) {
    margin-right: 10px;
    height: 60vh;
    margin-bottom: 40px;
  }
  @media (max-width: 772px) {
    margin-right: 10px;
    height: 60vh;
    margin-bottom: 40px;
  }
  @media (max-width: 512px) {
    margin-right: 10px;
    height: 90vh;
    margin-bottom: 40px;
  }
`;
export const ItemFlexWrapper = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  padding: 15px 25px;

  @media (max-width: 980px) {
    padding: 10px 15px;
  }
`;
export const FelxCard = styled.div`
  //   display: flex;
  //   padding: 15px;

  //   @media(max-width:980px){
  //     padding: 10px;
  //   }
  //   @media(max-width:812px){

  //   }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media (max-width: 812px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (max-width: 772px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  @media (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    align-items:center;
    justify-content:center;

  }
`;
