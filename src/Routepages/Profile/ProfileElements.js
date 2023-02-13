import styled from "styled-components";
export const UserConatiner = styled.div`
padding: 250px 50px;`;
export const UserWrapper = styled.div`
  background: rgba(20, 20, 20, 0.3);
  padding: 80px 50px;
  margin: 0px 100px;
  border-radius: 25px;
  display: flex;
  justify-content:space-around;
  align-items: center;
  backdrop-filter: blur(8px);
  @media(max-width:1080px){
    flex-direction:column;
  }
  @media(max-width:980px){
    padding: 80px 20px;
    margin: 0px 30px;
  }
  @media(max-width:520px){
    padding: 40px 10px;
    margin: 0px 0px;
    width:100%;
    background: rgba(20, 20, 20, 0);
  }
`;
export const UserDP = styled.div`
border-radius:250px;
border:2px solid #25fcf4;;
padding:10px;
`;

export const H1 = styled.h1`
font-size:12rem;
background:#6762a2;
border-radius:250px;
padding:35px;
color:#fff;
@media(max-width:772px){
  padding:20px;
  font-size:7rem;
}

`;
export const UserDetails = styled.form`
@media(max-width:772px){
  margin-top:25px;
}
`;
export const Label =styled.label`
color:#fff;
font-size:35px;
font-weight:100;
@media(max-width:772px){
  font-size:25px;
}

`;
export const Input =styled.input`
font-size:28px;
padding:5px;
margin-top:7px;
background:#6762a2;
opacity:0.9;
outline:none;
border-radius:100px;
color:#fff;
::Placeholder{
  padding:15px;
  font-size:26px;
  color:#fff;

}
@media(max-width:772px){
  font-size:25px;
}

`
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
