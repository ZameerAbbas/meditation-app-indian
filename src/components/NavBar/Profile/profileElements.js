import styled from "styled-components";


export const Container = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
 
`;
export const Icon = styled.img``;
export const Felx = styled.div`
font-size:15px;
padding:15px 20px;
display flex;
align-items:center;
cursor: pointer;
transition:all ease-in-out   1s;
&:hover .hover{
    display: block;
    transition:all ease-in 7s;
}
&:hover .corsur{
    cursor: pointer;
}
`;
export const Img = styled.img`
  width: 20px;
  margin: 0 10px;
`;

export const Home =styled.div`
height: 60px;
width: 200px;
// border:1px solid red;
right: 25px;
position: absolute;

` 
export const HoverItem = styled.div`
  display: none;
  background: rgb(20, 20, 20);
  opacity:0.7;
  padding: 15px 25px;
  backdrop-filter: blur(15px);
  position: absolute;
  top: 60px;
  right: 25px;
  border-radius: 10px;
  z-index: 99;
  &:before {
    display: inline-block;
    text-align: center;
    position: absolute;
    height: 30px;
    width: 30px;
    content: " ";
    margin-top:-25px;
    right:25px;
    z-index:2;
    text-shadow: none;
    background: rgb(20, 20, 20);
    backdrop-filter: blur(15px);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export const Postion = styled.div``;
export const Ul = styled.ul`
  list-style-type: none;
`;
export const Li = styled.li`
  position: relative;
  padding: 10px 5px;
  cursor: pointer;
  display:flex;
  align-items:center;
  &:hover {
    color: #25fcf4;
  }
`;
export const Log = styled.img`
width: 20px;
height:20px;

`