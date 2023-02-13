import styled from "styled-components";
import img from "./svg/react.png";
import Book from "./svg/Book1.png";

export const Container = styled.div`
  color: #25fcf4;
  padding: 100px 0;
`;
export const BEforeContainer = styled.div`
  display: flex;
  width: 80%;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  margin-left:25px;
  width 80%;
  &:before {
    display: flex;
    align-items:center;
    justify-content:center;
    text-align: center;
    position: absolute;
    content: url(${Book}) ;
    margin: 90px 0 0 20px;
    height: 50px;
    text-shadow: none;
    background: linear-gradient(
      0deg,
      rgba(4, 154, 159, 1) 0%,
      rgba(88, 94, 213, 1) 100%
    );
    width: 50px;
    border-radius: 150px;
    @media (max-width: 1660px) {
      margin: 100px 0 0 20px;
    }
    @media (max-width: 1560px) {
      margin: 115px 0 0 20px;
    }

    @media (max-width: 1460px) {
      margin: 115px 0 0 20px;
    }
    @media (max-width: 1346px) {
      margin: 135px 0 0 20px;
    }
    @media (max-width: 1231px) {
      margin: 150px 0 0 20px;
    }
    @media (max-width: 1136px) {
      margin: 170px 0 0 20px;
    }
    @media (max-width: 1099px) {
      margin: 190px 0 0 20px;
    }
  
    @media (max-width: 1024px) {
      display: none;
    }
   
  }
`;
// export const FlexBox3 = styled.div`
//   display: flex;
//   border:1px solid red;
//   margin-left:35px;
//   width 80%;
//   &:before {
//     display: flex;
//     align-items:center;
//     justify-content:center;
//     text-align: center;
//     position: absolute;
//     content: url(${Book}) ;
//     margin: 90px 0 0 20px;
//     height: 50px;
//     text-shadow: none;
//     background: linear-gradient(
//       0deg,
//       rgba(4, 154, 159, 1) 0%,
//       rgba(88, 94, 213, 1) 100%
//     );
//     width: 50px;
//     border-radius: 150px;
//     @media (max-width: 1560px) {
//       margin: 95px 0 0 25px;
//     }

//     @media (max-width: 1460px) {
//       margin: 105px 0 0 25px;
//     }
//     @media (max-width: 1186px) {
//       margin: 125px 0 0 25px;
//     }
//     @media (max-width: 1080px) {
//       margin: 145px 0 0 25px;
//     }
//     @media (max-width: 1024px) {
//       margin: 145px 0 0 25px;
//     }
//     @media (max-width: 968px) {
//       margin: 160px 0 0 25px;
//     }
//     @media (max-width: 941px) {
//       margin: 180px 0 0 25px;
//     }

//     @media (max-width: 834px) {
//       display: none;
//     }
//   }
// `;
export const FlexBox2 = styled.div`
  display: flex;
  align-items: flex-end;
 
  margin-left:50px;
  width 80%;
  &:after {
   
    display: flex;
    align-items:center;
    justify-content:center;
    text-align: center;
    position: absolute;
    margin: 0px 0 120px 20px;
    height: 50px;
    content: url(${img}) ;
    text-shadow: none;
    background: linear-gradient(
      0deg,
      rgba(4, 154, 159, 1) 0%,
      rgba(88, 94, 213, 1) 100%
    );
    width: 50px;
    border-radius:150px;
    @media (max-width: 1660px) {
      margin: 0px 0 90px 20px;
    }
    @media (max-width: 1560px) {
      margin: 0px 0 100px 20px;
    }
    @media (max-width:1530px) {
      margin: 0px 0 115px 20px;
    }
 
    @media (max-width:1458px) {
      margin: 0px 0 115px 20px;
    }
    
    @media (max-width:1297px) {
      margin: 0px 0 135px 20px;
    }
    @media (max-width:1169px) {
      margin: 0px 0 155px 20px;
    }
    @media (max-width:1066px) {
      margin: 0px 0 170px 20px;
    }
    @media (max-width:1060px) {
      margin: 0px 0 186px 20px;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
export const Heading = styled.h2`
  padding: 0 10px;

  &:before {
    position: absolute;
    height: 8px;
    content: " ";
    margin: 0 37px;
    text-shadow: none;
    background: radial-gradient(
      circle,
      rgba(37, 252, 244, 1) 0%,
      rgba(135, 219, 246, 1) 100%
    );
    width: 8px;
    border-radius: 150px;
    @media (max-width: 1660px) {
      margin: 0 30px;
    };
    @media (max-width: 1560px) {
      margin: 0 30px;
    };
    @media (max-width: 1024px) {
        
    };
  }
`;
export const Heading1 = styled.h2`
  padding: 0 10px;

  &:before {
    position: absolute;
    height: 8px;
    content: " ";
    margin: 20px 39px;
    text-shadow: none;
    background: radial-gradient(
      circle,
      rgba(37, 252, 244, 1) 0%,
      rgba(135, 219, 246, 1) 100%
    );
    width: 8px;
    border-radius: 150px;
    @media (max-width: 1660px) {
      margin: 20px 30px;
    };
    @media (max-width: 1560px) {
      margin: 20px 30px;
    };
    @media (max-width: 1024px) {
     
    }
  }
`;

export const FelxWrapper = styled.div`
  border-left: 1px solid rgb(45, 151, 180);
  padding: 0px 25px;
  padding-bottom:40px;
  
  &:before {
    content: "";
  }
`;
export const Text = styled.p`
   max-width: 90%;
`
export const FelxWrapper2 = styled.div`
  border-left: 1px solid rgb(45, 151, 180);
  padding: 0px 15px;
  padding-top:45px;

  &:before {
    content: "";
  }
`;
export const Center = styled.div`
  width: 100%;
`;

export const Icon = styled.div`
  background: linear-gradient(
    0deg,
    rgba(45, 151, 180, 1) 0%,
    rgba(53, 64, 125, 1) 100%
  );
  display: inline-block;
  width: 100%;
  height: 3px;

`;

export const AfterConatiner = styled.div`
  display: flex;
  width: 80%;
  margin-left: 15%;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
